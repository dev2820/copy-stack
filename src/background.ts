import createCopy from "@/utils/createCopy";
import copyStore from "@/stores/copyStore";
import { BroadcastingStation } from "@/modules/broadcast";
import RUNTIME_MESSAGE from "@/constants/RUNTIME_MESSAGE";
import CONTEXT_MENUS from "@/constants/CONTEXT_MENUS";

const broadcastingStation = new BroadcastingStation("copy", copyStore);

chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
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
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: CONTEXT_MENUS.STORE_TO_COPY_STACK.ID,
    title: CONTEXT_MENUS.STORE_TO_COPY_STACK.TITLE,
    contexts: CONTEXT_MENUS.STORE_TO_COPY_STACK.CONTEXTS,
  });
});

chrome.contextMenus.onClicked.addListener(async (info) => {
  if (info.menuItemId !== CONTEXT_MENUS.STORE_TO_COPY_STACK.ID) return false;

  if (info.selectionText) {
    const copy = createCopy(info.selectionText, new Date(), info.pageUrl);
    copyStore.addCopy(copy);
  } else if (info.mediaType === "image" && info.srcUrl) {
    const image = await fetch(info.srcUrl);
    const blob = await image.blob();

    const copy = createCopy(blob, new Date(), info.pageUrl);
    copyStore.addCopy(copy);
  }

  return false;
});
