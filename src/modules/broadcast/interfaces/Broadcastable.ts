import Messagable from "@/modules/broadcast/interfaces/Messagable";

/**
 * @description
 * send message using sender and receive message using Receiver.
 */
export default interface Broadcastable {
  /**
   * @description Broadcastable can send message which have Messagable interface, if sending is success, then return true
   * @param {Messagable} Message Broadcastable can only send messagable Messages
   * @returns {boolean} if send is success, then return true
   */
  send(Message: Messagable): boolean;
}
