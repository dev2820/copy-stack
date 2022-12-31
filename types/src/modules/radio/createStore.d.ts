export default function createStore(storeName: string, storeOption: {
    state: {
        [key: string]: any;
    };
    actions: {
        [key: string]: Function;
    };
    channel?: BroadcastChannel;
}): {
    [key: string]: any;
};
