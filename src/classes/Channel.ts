export default class Channel<State> {
  private channel: BroadcastChannel;
  private listeners: Function[] = [];
  public $state: State;

  constructor(channel: BroadcastChannel, initialState: State) {
    this.$state = initialState;
    this.channel = channel;

    this.channel.onmessage = (evt: MessageEvent) => {
      this.$state = evt.data.payload;
    };
  }

  $subscribe(listener: Function) {
    this.listeners.push(listener);

    return () => {
      this.listeners.filter((l) => l !== listener);
    };
  }
}
