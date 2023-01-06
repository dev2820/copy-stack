import { createStore } from "broadcasting";
import type Copy from "@/types/Copy";
import copyRepo from "@/modules/copyRepo";

export default createStore({
  state: {
    copyList: [],
  },
  actions: {
    async init() {
      this.copyList = await copyRepo.readAll();
    },
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
