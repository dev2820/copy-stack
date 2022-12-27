export default class Channel<State> {
  #channel: BroadcastChannel;
  #listeners: Function[] = [];
  $state: State;

  constructor(channelName: string, initialState: State) {
    this.#channel = new BroadcastChannel(channelName);
    this.$state = initialState;
    this.#channel.onmessage = (evt: MessageEvent) => {
      this.$state = evt.data.payload;
      this.#runListeners(this.$state);
    };
  }

  #runListeners(newState: State) {
    this.#listeners.forEach((l) => l(newState));
  }

  $subscribe(listener: Function) {
    this.#listeners.push(listener);

    return () => {
      this.#listeners.filter((l) => l !== listener);
    };
  }
}
