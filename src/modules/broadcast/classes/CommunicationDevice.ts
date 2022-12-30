import Broadcastable from "../interfaces/Broadcastable";
import ChannelAddress from "../types/ChannelAddress";
import Packet from "./Packet";
import * as PACKET_TYPE from "../constants/PACKET_TYPES";
export default abstract class CommunicationDevice implements Broadcastable {
  #sender: BroadcastChannel;
  #receiver: BroadcastChannel;

  constructor(address: ChannelAddress) {
    this.#sender = new BroadcastChannel(address.sender);
    this.#receiver = new BroadcastChannel(address.receiver);
    this.#receiver.onmessage = this.#handleMessage;
  }
  broadcast(packet: Packet): boolean {
    try {
      this.#sender.postMessage(packet);
      return true;
    } catch (err) {
      return false;
    }
  }
  #handleMessage(evt: MessageEvent) {
    const packet = evt.data;
    if (!(packet instanceof Packet)) return;

    this.handlePacket(packet);
  }

  protected abstract handlePacket(packet: Packet): void;
}