//https://stackoverflow.com/questions/60363513/how-to-execute-a-function-before-and-after-each-class-method-call
export default function createStore(
  storeName: string,
  storeOption: {
    state: { [key: string]: any };
    actions: { [key: string]: Function };
    channel?: any;
  }
): { [key: string]: any } {
  const { state, actions, channel } = storeOption;

  let _isChanged_ = false;
  const store: { [key: string]: any } = {
    ...state,
  };
  Object.keys(store).forEach((key: string) => {
    store[`_${key}`] = store[key];
    Object.defineProperty(store, key, {
      get: () => {
        return store[`_${key}`];
      },
      set: (value: any) => {
        _isChanged_ = true;
        store[`_${key}`] = value;
      },
    });
  });
  Object.keys(actions).forEach((actionName: string) => {
    store[`_${actionName}`] = actions[actionName].bind(store);
    store[actionName] = function () {
      _isChanged_ = false;

      const result = store[`_${actionName}`](...arguments);
      if (_isChanged_) {
        console.log("!changed");
      }
      _isChanged_ = false;
      return result;
    };
  });

  Object.defineProperty(store, "$channel", {
    get: () => {
      return channel ?? new BroadcastChannel(storeName);
    },
  });
  Object.defineProperty(store, "$name", {
    get: () => {
      return storeName;
    },
  });

  return store;
}
