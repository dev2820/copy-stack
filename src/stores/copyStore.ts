import { createStore } from "@/modules/broadcast";
import Copy from "@/types/Copy";

export default createStore({
  state: {
    copyList: [
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
    ],
  },
  actions: {
    addCopy(copy: Copy) {
      this.copyList = [...this.copyList, copy];
    },
  },
});
