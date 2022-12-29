import { test, expect, describe, jest } from "@jest/globals";
import { createStore } from "@/modules/broadcast";

/**
 * creating store using createStore
 */
type State = {
  count: number;
};
/**
 * make fake BroadcastChannel because BroadcastChannel is not exist in jest
 */
const mockBroadcastChannel = {
  onmessage: (message: any) => {
    return message;
  },
  name: "example",
  onmessageerror: () => {},
  close: () => {},
  postMessage: (message: any) => {
    mockBroadcastChannel.onmessage(message);
  },
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => false,
};

const countStore = createStore("counter", {
  state: {
    count: 0,
  },
  actions: {
    increase(this: any): void {
      this.count++;
    },
    setCount(this: any, newCount: number): void {
      this.count = newCount;
    },
  },
  channel: mockBroadcastChannel,
});

test("read state in store", () => {
  expect(countStore.count).toBe(0);
});

test("rise a action", () => {
  /**
   * rising 'increase' action
   */
  countStore.increase();
  expect(countStore.count).toBe(1);

  /**
   * rising action which needs parameters
   */
  countStore.setCount(5);
  expect(countStore.count).toBe(5);
});

describe("properties start with '$' can't be changed", () => {
  test("$name property can't be changed", () => {
    expect(countStore.$name).toBe("counter");

    expect(() => {
      countStore.$name = "counter2";
    }).toThrow();

    /**
     * still countStore.$name is 'counter'
     */
    expect(countStore.$name).toBe("counter");
  });
});

test("how subscribe works", () => {
  const view = {
    listener: (state: State) => {
      expect(state.count).toBe(6);
    },
  };
  expect(countStore.count).toBe(5);
  const postbox = countStore.$getPostbox();

  const spyListener = jest.spyOn(view, "listener");

  postbox.addListener(spyListener);
  /**
   * rising an action
   */
  countStore.increase();

  /**
   * because action is occured, listener is worked
   */
  expect(spyListener).toBeCalledTimes(1);
});
