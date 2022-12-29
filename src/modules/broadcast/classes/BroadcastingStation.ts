import CommunicationDevice from "./CommunicationDevice";
import createUniqueChannelAddress from "../utils/createUniqueChannelAddress";
import ChannelAddress from "../types/ChannelAddress";

export default class BroadcastingStation extends CommunicationDevice {
  #channelAddress: ChannelAddress;

  constructor(stationName: string) {
    const channelAddress = createUniqueChannelAddress(stationName);
    super(channelAddress);

    this.#channelAddress = channelAddress;
  }

  get channelAddress(): ChannelAddress {
    return this.#channelAddress;
  }
  protected handleMessage(evt: MessageEvent<any>): void {}
}
