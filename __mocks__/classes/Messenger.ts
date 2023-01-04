import RUNTIME_MESSAGE from "../../src/constants/RUNTIME_MESSAGE";

export default class Messenger {
  static async sendMessage(message) {
    if (message.type === RUNTIME_MESSAGE.GET_CHANNEL_ADDRESS) {
      return {
        sender: "COPY-CHANNEL-SENDER",
        receiver: "COPY-CHANNEL-RECEIVER",
      };
    }
  }
}
