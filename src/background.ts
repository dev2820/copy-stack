import copyStore from "@/stores/copyStore";
import { BroadcastingStation } from "@/modules/broadcast";
import RUNTIME_MESSAGE from "./constants/RUNTIME_MESSAGE";

const broadcastingStation = new BroadcastingStation("copy", copyStore);
chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  switch (message.type) {
    case RUNTIME_MESSAGE.GET_CHANNEL_ADDRESS: {
      const channelAddress = broadcastingStation.channelAddress;
      sendResponse(channelAddress);

      return false;
    }
  }

  return true;
});
