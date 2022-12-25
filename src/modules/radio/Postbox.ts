export default class Postbox {
  #channel: BroadcastChannel;
  #listeners: Array<Function>;

  constructor(channel: BroadcastChannel) {
    this.#channel = channel;
    this.#listeners = [];

    this.#channel.onmessage = (state) => {
      this.#listeners.forEach((l) => {
        l(state);
      });
    };
  }

  addListener(listener: Function) {
    this.#listeners.push(listener);

    return () => {
      this.#listeners = this.#listeners.filter((l) => l !== listener);
    };
  }
}
