let port2Background: chrome.runtime.Port | undefined = openPort2Background();

function openPort2Background() {
  const port = chrome.runtime.connect();
  const timeout = setTimeout(() => {
    port2Background = openPort2Background();
    port.disconnect();
  }, 29 * 1000);

  port.onDisconnect.addListener(() => {
    clearTimeout(timeout);
    if (port !== port2Background) return;
  });

  return port;
}

export default {
  isAlive() {
    return !!port2Background;
  },
};
