import type Message from "../types/Message";

export default interface Broadcastable {
  /**
   * @description Broadcastable can dispatch action, if sending is success, then return true
   * @param {Message} message Broadcastable can only dispatch message
   * @returns {boolean} if dispatch is success, then return true
   */
  broadcast(message: Message): boolean;
}
