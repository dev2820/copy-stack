export default class Channel<State> {
    #private;
    $state: State;
    constructor(channelName: string, initialState: State);
    $subscribe(listener: Function): () => void;
}
