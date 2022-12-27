import type Copy from "../../src/types/Copy";

export default class Channel {
  $state: {
    copyList: Copy[];
  } = {
    copyList: [],
  };
  #listeners: Function[] = [];

  constructor(_, initialState) {
    this.$state = initialState;
  }

  update(newState) {
    this.#listeners.forEach((listener) => listener(newState));
  }

  $subscribe(listener: Function) {
    this.#listeners.push(listener);

    return () => {
      this.#listeners.filter((l) => l !== listener);
    };
  }
}
