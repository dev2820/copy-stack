type Message = {
  type: string;
  payload?: any;
};

export default class Messenger {
  static async sendMessage<ReturnType>(message: Message): Promise<ReturnType> {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage(message, (res: ReturnType) => {
        resolve(res);
      });
    });
  }
}
