import CommunicationDevice from "./CommunicationDevice";
import createUniqueChannelAddress from "../utils/createUniqueChannelAddress";
import ChannelAddress from "../types/ChannelAddress";
import Messagable from "../interfaces/Messagable";
import Action from "./Action";

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
    const action: Action = evt.data;
    if (!Action.isAction(action)) return;

    const isChanged = this.#store.dispatch(action);
    if (!isChanged) return;

    const newState: Messagable = this.#store.$state;
    this.broadcast(newState);
  }
}
