import Postbox from "./Postbox";

export default function createStore(
  storeName: string,
  storeOption: {
    state: { [key: string]: any };
    actions: { [key: string]: Function };
    channel?: BroadcastChannel;
  }
): { [key: string]: any } {
  const { state, actions, channel } = storeOption;
  const initialState = state;
  const _channel_ = channel ?? new BroadcastChannel(storeName);
  const _name_ = storeName;

  let _isChanged_ = false;
  // 반환할 state를 만들 때 map을 써서 nlogn만에 state들을 찾도록 만듦

  const store: { [key: string]: any } = {};

  const stateMap = Object.keys(initialState).reduce(
    (map: Map<string, any>, key: string) => {
      map.set(key, initialState[key]);

      return map;
    },
    new Map()
  );

  const actionMap = Object.keys(actions).reduce(
    (map: Map<string, Function>, key: string) => {
      map.set(key, function () {
        _isChanged_ = false;
        const action = actions[key].bind(store);
        const result = action(...arguments);
        if (_isChanged_) {
          _channel_.postMessage(Object.fromEntries(stateMap));
        }
        return result;
      });

      return map;
    },
    new Map()
  );

  const stateKeys = [...stateMap.keys()];
  stateKeys.forEach((key: string) => {
    Object.defineProperty(store, key, {
      get: () => {
        if (!stateMap.has(key)) return undefined;
        return stateMap.get(key);
      },
      set: (value: any) => {
        _isChanged_ = true;
        stateMap.set(key, value);
      },
    });
  });

  const actionKeys = [...actionMap.keys()];
  actionKeys.forEach((key: string) => {
    Object.defineProperty(store, key, {
      get: () => {
        if (!actionMap.has(key)) return undefined;
        return actionMap.get(key);
      },
    });
  });

  Object.defineProperty(store, "$channel", {
    get: () => {
      return _channel_;
    },
  });
  Object.defineProperty(store, "$name", {
    get: () => {
      return _name_;
    },
  });
  Object.defineProperty(store, "$getPostbox", {
    value: () => {
      return new Postbox(store.$channel);
    },
  });

  return store;
}
