import Messenger from "@/classes/Messenger";
import RUNTIME_MESSAGE from "@/constants/RUNTIME_MESSAGE";
import createCopy from "@/utils/createCopy";

document.addEventListener("copy", async () => {
  const content = await navigator.clipboard.readText();
  const created = new Date();
  const source = window.location.toString();

  Messenger.sendMessage({
    type: RUNTIME_MESSAGE.NEW_TEXT_COPY,
    payload: createCopy(content, created, source),
  });
});
