/**
 * reference
 * https://stackoverflow.com/questions/72229032/how-to-detect-that-chrome-extension-with-manifest-v3-was-unloaded
 */

const cycle = 5 * 60 - 1; // 299sec
let state = true;
let portToBackground: chrome.runtime.Port = openPortToBackground();

function openPortToBackground() {
  const port = chrome.runtime.connect();

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

export default {
  isAlive() {
    return state;
  },
};
