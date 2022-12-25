import { test, expect, describe, jest } from "@jest/globals";
import { createStore } from "@/modules/radio";
import { BroadcastChannel } from "broadcast-channel";

jest.mock("broadcast-channel");

/**
 * creating store using createStore
 */
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
  channel: new BroadcastChannel("counter-channel"),
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

describe("some properties can't be changed", () => {
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
