import Messenger from "@/modules/Messenger";
import RUNTIME_MESSAGE from "@/constants/RUNTIME_MESSAGE";
import createCopy from "@/utils/createCopy";
import * as COPY_TYPE from "@/constants/COPY_TYPE";

document.addEventListener("copy", async () => {
  const content = await navigator.clipboard.readText();
  const created = new Date().getTime();
  const source = window.location.toString();

  Messenger.sendMessage({
    type: RUNTIME_MESSAGE.NEW_TEXT_COPY,
    payload: createCopy(COPY_TYPE.TEXT, content, created, source),
  });
});
