import Broadcastable from "../interfaces/Broadcastable";
import ChannelAddress from "../types/ChannelAddress";
import Messagable from "../interfaces/Messagable";

export default abstract class CommunicationDevice implements Broadcastable {
  #sender: BroadcastChannel;
  #receiver: BroadcastChannel;

  constructor(address: ChannelAddress) {
    this.#sender = new BroadcastChannel(address.sender);
    this.#receiver = new BroadcastChannel(address.receiver);
    this.#receiver.onmessage = this.handleMessage;
  }

  broadcast(message: Messagable): boolean {
    try {
      this.#sender.postMessage(message);
      return true;
    } catch (err) {
      return false;
    }
  }

  protected abstract handleMessage(evt: MessageEvent): void;
}
