export default class Channel<State> {
  private channel: BroadcastChannel;
  private listeners: Function[] = [];
  public $state: State;

  constructor(channelName: string, initialState: State) {
    this.channel = new BroadcastChannel(channelName);
    this.$state = initialState;
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
