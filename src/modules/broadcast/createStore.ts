import Action from "./classes/Action";

export default function createStore(storeOption: {
  state: Record<string, any>;
  actions: Record<string, Function>;
}): Record<string, any> {
  const { state, actions } = storeOption;

  let _isChanged_ = false;

  const store: Record<string, any> = {};

  const stateMap = Object.keys(state).reduce((map, key: string) => {
    return map.set(key, state[key]);
  }, new Map<string, any>());

  const actionMap = Object.keys(actions).reduce((map, key: string) => {
    return map.set(key, function () {
      _isChanged_ = false;
      const action = actions[key].bind(store);
      action(...arguments);

      return _isChanged_;
    });
  }, new Map<string, Function>());

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

  store.$dispatch = (action: Action) => {
    if (!actionMap.has(action.type)) return;

    const act = actionMap.get(action.type);
    const isChanged = act ? act(action.payload) : false;

    return isChanged;
  };

  return store;
}
