import Store from "./interfaces/Store";
export default function createStore(storeOption: {
    state: Record<string, any>;
    actions: Record<string, any>;
}): Store;
