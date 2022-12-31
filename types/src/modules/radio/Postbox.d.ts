export default class Postbox {
    #private;
    constructor(channel: BroadcastChannel);
    addListener(listener: Function): () => void;
}
