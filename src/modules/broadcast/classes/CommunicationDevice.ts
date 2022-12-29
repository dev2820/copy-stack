import Broadcastable from "../interfaces/Broadcastable";
import ChannelAddress from "../types/ChannelAddress";
import Messagable from "../interfaces/Messagable";
export default class CommunicationDevice implements Broadcastable {
  #sender: BroadcastChannel;
  #receiver: BroadcastChannel;
  #listeners: Function[] = [];

  constructor(address: ChannelAddress) {
    this.#sender = new BroadcastChannel(address.sender);
    this.#receiver = new BroadcastChannel(address.receiver);
    this.#receiver.onmessage = this.#handleMessage;
  }
  send(message: Messagable): boolean {
    try {
      this.#sender.postMessage(message);
      return true;
    } catch (err) {
      return false;
    }
  }
  addListener(listener: Function): Function {
    this.#listeners.push(listener);

    return () => {
      this.#listeners = this.#listeners.filter((l) => l !== listener);
    };
  }
  #handleMessage(evt: MessageEvent) {
    const data = evt.data;
    this.#listeners.forEach((l) => l(data));
  }
}
