let data: any = null;

export default class Messenger {
  static async sendMessage(message) {
    if (message === "getBaseStationInfo") {
      return {
        name: "COPY-CHANNEL",
        initialState: {
          ...data,
        },
      };
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
