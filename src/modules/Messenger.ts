import type Message from "@/types/Message";

export default {
  async sendMessage<ReturnType>(message: Message): Promise<ReturnType> {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage(message, (res: ReturnType) => {
        resolve(res);
      });
    });
  },
};
