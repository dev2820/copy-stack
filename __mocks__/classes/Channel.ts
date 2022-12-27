export default class Channel {
  $state = {};
  #listeners: Function[] = [];

  constructor(initialState) {
    this.$state = initialState;
  }

  $subscribe(listener: Function) {
    this.#listeners.push(listener);

    return () => {
      this.#listeners.filter((l) => l !== listener);
    };
  }
}
