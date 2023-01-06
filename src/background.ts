import createCopy from "@/utils/createCopy";
import copyStore from "@/stores/copyStore";
import url2Blob from "@/utils/url2Blob";
import { BroadcastingStation } from "broadcasting";
import RUNTIME_MESSAGE from "@/constants/RUNTIME_MESSAGE";
import CONTEXT_MENUS from "@/constants/CONTEXT_MENUS";

const broadcastingStation = new BroadcastingStation("copy", copyStore);

const handleRuntimeMessage = (
  message: any,
  _: chrome.runtime.MessageSender,
  sendResponse: (response?: any) => void
) => {
  switch (message.type) {
    case RUNTIME_MESSAGE.GET_CHANNEL_ADDRESS: {
      const channelAddress = broadcastingStation.channelAddress;
      sendResponse(channelAddress);

      return false;
    }
    case RUNTIME_MESSAGE.NEW_TEXT_COPY: {
      const textCopy = message.payload;
      copyStore.addCopy(textCopy);
    }
  }

  return true;
};

const createMenus = () => {
  chrome.contextMenus.create({
    id: CONTEXT_MENUS.STORE_TO_COPY_STACK.ID,
    title: CONTEXT_MENUS.STORE_TO_COPY_STACK.TITLE,
    contexts: CONTEXT_MENUS.STORE_TO_COPY_STACK.CONTEXTS,
  });
};

const imageCopyHandler = async (info: chrome.contextMenus.OnClickData) => {
  if (!info.srcUrl) return;

  const blob = await url2Blob(info.srcUrl);

  const copy = createCopy(blob, new Date(), info.pageUrl);
  copyStore.addCopy(copy);
};

const textCopyHandler = (info: chrome.contextMenus.OnClickData) => {
  if (!info.selectionText) return;

  const copy = createCopy(info.selectionText, new Date(), info.pageUrl);
  copyStore.addCopy(copy);
};

const contextMenuHandler = async (info: chrome.contextMenus.OnClickData) => {
  if (info.menuItemId !== CONTEXT_MENUS.STORE_TO_COPY_STACK.ID) return false;

  if (info.selectionText) {
    textCopyHandler(info);
  } else if (info.mediaType === "image") {
    imageCopyHandler(info);
  }

  return false;
};

chrome.runtime.onMessage.addListener(handleRuntimeMessage);
chrome.runtime.onInstalled.addListener(createMenus);
chrome.contextMenus.onClicked.addListener(contextMenuHandler);

const init = async () => {
  await copyStore.init();
  broadcastingStation.forceUpdate();
};

init();
