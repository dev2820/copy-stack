import CommunicationDevice from "./CommunicationDevice";
import createUniqueChannelAddress from "../utils/createUniqueChannelAddress";
import ChannelAddress from "../types/ChannelAddress";
import Message from "../types/Message";
import Action from "./Action";
import Packet from "./Packet";
import * as PACKET_TYPE from "../constants/PACKET_TYPES";

export default class BroadcastingStation extends CommunicationDevice {
  #store: Record<string, any>;
  #channelAddress: ChannelAddress;

  constructor(stationName: string, store: Record<string, any>) {
    const channelAddress = createUniqueChannelAddress(stationName);
    super(channelAddress);

    this.#channelAddress = channelAddress;
    this.#store = store;
  }

  get channelAddress(): ChannelAddress {
    return this.#channelAddress;
  }

  protected handleMessage(evt: MessageEvent<any>): void {
    const packet = evt.data;
    if (!(packet instanceof Packet)) return;

    this.#handlePacket(packet);
  }

  #handlePacket(packet: Packet) {
    switch (packet.header.type) {
      case PACKET_TYPE.DISCOVER: {
        this.#handleDiscover();
        return;
      }
      default: {
        if (!(packet.payload instanceof Action)) return;

        this.#handleAction(packet.payload);
        return;
      }
    }
  }

  #handleDiscover() {}
  #handleAction(action: Action) {}
}
