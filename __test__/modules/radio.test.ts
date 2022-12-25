import { test, expect, describe } from "@jest/globals";
import { createStore } from "@/modules/radio";

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
  test("_name_ property can't be changed", () => {
    expect(countStore._name_).toBe("counter");

    expect(() => {
      countStore._name_ = "counter2";
    }).toThrow();

    /**
     * still countStore._name_ is 'counter'
     */
    expect(countStore._name_).toBe("counter");
  });

  test("_isChanged_ property can't be changed", () => {
    expect(countStore._isChanged_).toBe(false);

    expect(() => {
      countStore._isChanged_ = true;
    }).toThrow();
  });
});
