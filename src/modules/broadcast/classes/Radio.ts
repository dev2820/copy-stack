import MessageAddress from "../types/ChannelAddress";
import CommunicationDevice from "./CommunicationDevice";
import Action from "./Action";
import Packet from "./Packet";
import * as PACKET_TYPE from "../constants/PACKET_TYPES";

export default class Radio extends CommunicationDevice {
  protected listeners: Function[] = [];
  protected initializer: Function;
  $state: Record<string, any> = {};

  constructor(address: MessageAddress, initializer: Function) {
    super(address);
    this.initializer = initializer;
    this.broadcast(Packet.DISCOVER);
  }
  $subscribe(listener: Function): Function {
    this.listeners.push(listener);

    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  broadcastAction(action: Action) {
    const packet = new Packet({ type: PACKET_TYPE.ACTION }, action);
    this.broadcast(packet);
  }

  protected handlePacket(packet: Packet): void {
    if (packet.header.type === PACKET_TYPE.OFFER) {
      this.#initState(packet.payload as Record<string, any>);
    }
    if (packet.header.type === PACKET_TYPE.NEW_STATE) {
      this.#updateState(packet.payload as Record<string, any>);
    }
  }

  #initState(initialState: Record<string, any>) {
    this.$state = initialState;
    this.initializer(this.$state);
  }

  #updateState(newState: Record<string, any>) {
    this.$state = newState;
    this.listeners.forEach((l) => l(this.$state));
  }
}
