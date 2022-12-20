import { describe, test, expect, jest } from "@jest/globals";
import { chrome } from "jest-chrome";

/**
 * jest-chrome running test
 */
test("chrome api events", () => {
  /**
   * make spy functions
   */
  const listenerSpy = jest.fn();
  const sendResponseSpy = jest.fn();

  chrome.runtime.onMessage.addListener(listenerSpy);

  /**
   * onMessage is not fired yet
   * but we can check that there is registered listener
   */
  expect(listenerSpy).not.toBeCalled();
  expect(chrome.runtime.onMessage.hasListeners()).toBe(true);

  /**
   * rise message event like this
   */
  chrome.runtime.onMessage.callListeners(
    { greeting: "hello" }, // message
    {}, // MessageSender object
    sendResponseSpy // SendResponse function
  );

  /**
   * now we can check listenerSpy is worked with following message
   */
  expect(listenerSpy).toBeCalledWith(
    { greeting: "hello" },
    {},
    sendResponseSpy
  );
  expect(sendResponseSpy).not.toBeCalled();
});
