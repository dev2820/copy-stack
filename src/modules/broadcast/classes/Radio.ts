import MessageAddress from "../types/ChannelAddress";
import CommunicationDevice from "./CommunicationDevice";
import Action from "./Action";
import Packet from "./Packet";
import * as PACKET_TYPE from "../constants/PACKET_TYPES";

export default class Radio extends CommunicationDevice {
  protected listeners: Function[] = [];
  $state: Record<string, any> = {};

  constructor(address: MessageAddress) {
    super(address);
    this.broadcast(Packet.DISCOVER);
  }
  /**
   * @description Radio can add listeners for respond to message from other CommunicationDevices
   * @param {Function} listener listener to respond to messages received
   * @returns {Function} addListener return function that can remove listener
   */
  addListener(listener: Function): Function {
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
      this.initState(packet.payload as Record<string, any>);
    }
    if (packet.header.type === PACKET_TYPE.NEW_STATE) {
      this.updateState(packet.payload as Record<string, any>);
    }
  }

  initState(state: Record<string, any>) {
    this.$state = state;
  }

  updateState(newState: Record<string, any>) {
    this.$state = newState;
    this.listeners.forEach((l) => l(this.$state));
  }
}
