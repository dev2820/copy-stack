import type Copy from "@/types/Copy";

const copyList = [
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    created: new Date("2022-12-27T08:00:00"),
    source: "https://www.lipsum.com/",
  },
  {
    content:
      "The Date() constructor can create a Date instance or return a string representing the current time.",
    created: new Date("2022-12-31T13:00:00"),
    source:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date",
  },
];
const channelName = "COPY-CHANNEL";
const channel = new BroadcastChannel(channelName);

chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  switch (message) {
    case "getBaseStationInfo": {
      sendResponse({
        name: channelName,
        initialState: {
          copyList,
        },
      });

      return true;
    }
    case "addCopy": {
      const newCopy: Copy = {
        content: "hello world",
        created: new Date(),
        source: "www.naver.com",
      };
      channel.postMessage({
        copyList: [...copyList, newCopy],
      });
    }
  }

  return true;
});
