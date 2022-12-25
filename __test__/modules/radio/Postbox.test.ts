import { test, expect, describe, jest } from "@jest/globals";
import { Postbox } from "@/modules/radio";

jest.mock("broadcast-channel");

/**
 * because BroadcastChannel is not exist in jest,
 * define fake BroadcastChannel
 *
 * original code is like this
 * `const channel = new BroadcastChannel("example");`
 */

const channel = {
  onmessage: (message: any) => {},
  name: "example",
  onmessageerror: () => {},
  close: () => {},
  postMessage: (message: any) => {
    channel.onmessage(message);
  },
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => false,
};

const postbox = new Postbox(channel);

const state = {
  count: 0,
};
test("add listener", () => {
  /**
   * To use postbox, just add listener about postbox
   * if postMessage occur, postbox run listener that you added
   */
  const view = {
    listener: (state: { count: number }) => {
      expect(state).toStrictEqual({
        count: 0,
      });
    },
  };
  const spyListener = jest.spyOn(view, "listener");
  const unsubscriber = postbox.addListener(view.listener);
  channel.postMessage(state);

  expect(spyListener).toBeCalledTimes(1);

  /**
   * you can also unsubscribe postbox
   */
  unsubscriber();
  channel.postMessage(state);
  /**
   * because postbox is unsubscribed, calledTime is not increased
   */
  expect(spyListener).toBeCalledTimes(1);
});
