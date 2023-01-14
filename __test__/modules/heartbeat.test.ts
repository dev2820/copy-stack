import { jest, test, expect } from "@jest/globals";

jest.useFakeTimers();
jest.spyOn(window, "setTimeout");

const sec5 = 5;
const cycle = sec5;
/**
 * 가짜 connect 함수를 만들어줍니다.
 * onDisconnect를 통해 listener를 등록할 수 있고
 * disconnect를 통해 등록된 리스너를 실행할 수 있습니다.
 */
const connect = () => {
  const listeners: Function[] = [];
  const port = {
    onDisconnect: {
      addListener: (cb: Function) => {
        listeners.push(cb);
      },
    },
    disconnect: () => {
      listeners.forEach((l) => l());
    },
  };

  return port;
};

/**
 * 방법:
 * connect로 포트를 열고
 * 5분이 되기 전에 새 포트를 열고 기존의 포트는 끊는다.
 */

let portToBackground: any = null;
let state = true;

function openPortToBackground() {
  const port = connect();

  const timeout = setTimeout(() => {
    portToBackground = openPortToBackground();
    port.disconnect();
  }, cycle * 1000);

  port.onDisconnect.addListener(() => {
    clearTimeout(timeout);
    state = port !== portToBackground;
  });

  return port;
}

test("Normal shutdown", () => {
  expect(setTimeout).toHaveBeenCalledTimes(0);
  /**
   * 초기 portToBackground는 null,
   * state는 true인 상태
   */
  expect(portToBackground).toBeNull();
  expect(state).toBe(true);
  /**
   * openPortToBackground가 동작하며 setTimeout이 최초 호출됨
   */
  portToBackground = openPortToBackground();
  expect(setTimeout).toHaveBeenCalledTimes(1);

  /**
   * 현재 동작중인 타이머에 걸려있는 시간만큼만 지나가게 함
   * 이 예제에선 5초 타이머를 걸어놨기 때문에 5초의 시간이 흐른 뒤
   * 의 상황이 될 것임
   */
  jest.runOnlyPendingTimers();

  /**
   * 5초 뒤엔 timeout되며 재귀적으로 updateConnect가 실행될 것 이기때문에
   * 2회 호출이 됨.
   *
   * 다음 새 타이머가 동작하며 5초의 시간 제한을 걸었을 것임
   * 따라서 arguments가 (어떤 함수, sec5 * 1000)이 됨
   */
  expect(setTimeout).toHaveBeenCalledTimes(2);
  expect(setTimeout).toHaveBeenLastCalledWith(
    expect.any(Function),
    sec5 * 1000
  );

  /**
   * onDisconnect가 정상적으로 동작했다면
   * portToBackground에 port가 배정되며 null이 되지 않았을 것임
   */
  expect(portToBackground).not.toBeNull();
  expect(state).toBe(true);

  /**
   * 연결을 종료하며 상태를 초기화함
   */
  portToBackground.disconnect();
  portToBackground = null;
  state = true;
});

test("Abnormal shutdown", () => {
  /**
   * 이전 테스트에 이어서 setTimeout은 그대로 두 번 호출된 상태
   * state는 true인 상황
   */
  expect(setTimeout).toHaveBeenCalledTimes(2);
  expect(state).toBe(true);
  /**
   * 새 포트를 배정
   */
  portToBackground = openPortToBackground();
  expect(setTimeout).toHaveBeenCalledTimes(3);
  /**
   * 포트를 수동으로 종료 시킴 (비정상 종료 상황)
   */
  portToBackground.disconnect();
  /**
   * 타이머에 걸려있는 시간만큼 시간을 감음
   * 물론 disconnect를 수행하며 타이머가 파기되었기 때문에 이는 동작하지 않음
   */
  jest.runOnlyPendingTimers();

  /**
   * setTimeout이 실행되지 않았음
   * 또한 state가 false가 되어있음
   */
  expect(setTimeout).not.toHaveBeenCalledTimes(4);
  expect(state).toBe(false);
});
