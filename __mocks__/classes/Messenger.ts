import Channel from "./Channel";

let data: any = null;

export default class Messenger {
  static async sendMessage(message) {
    if (message === "getChannel") {
      return new Channel(data);
    }
    data = null;
  }
}

export function decorator(story, { parameters }) {
  if (parameters && parameters.store) {
    data = parameters.store.data;
  }

  return story();
}
