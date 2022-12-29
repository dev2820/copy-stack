import MessageAddress from "../types/ChannelAddress";
import CommunicationDevice from "./CommunicationDevice";
export default class Radio extends CommunicationDevice {
  protected listeners: Function[] = [];

  constructor(address: MessageAddress) {
    super(address);
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

  protected handleMessage(evt: MessageEvent<any>): void {
    const newState = evt.data;
    this.listeners.forEach((l) => l(newState));
  }
}
