import { createStore } from "broadcasting";
import type Copy from "@/types/Copy";
import copyRepo from "@/modules/copyRepo";

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
    async addCopy(copy: Copy) {
      const isSuccess = await copyRepo.create(copy);
      if (isSuccess) {
        this.copyList = await copyRepo.readAll();
      }
    },
    async deleteCopy(index: number) {
      const isSuccess = await copyRepo.delete(index);
      if (isSuccess) {
        this.copyList = await copyRepo.readAll();
      }
    },
  },
});
