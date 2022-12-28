export default class Messenger {
  static async sendMessage<ReturnType>(message: any): Promise<ReturnType> {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage(message, (res: ReturnType) => {
        resolve(res);
      });
    });
  }
}
