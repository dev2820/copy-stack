import { createStore } from "broadcasting";
import type Copy from "@/types/Copy";
import IndexedDBRepo from "@/classes/Repo/IndexedDBRepo";
import getIDB from "@/utils/getIDB";

const COPY_DB = "COPY_DB";
const COPY_STORE = "copyStore";

let copyRepo: null | IndexedDBRepo<Copy> = null;

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
      if (!copyRepo) {
        const db = await getIDB(COPY_DB, (evt) => {
          const db = (evt.target as IDBOpenDBRequest).result;
          db.createObjectStore(COPY_STORE, {
            keyPath: "id",
            autoIncrement: true,
          });
        });
        copyRepo = new IndexedDBRepo<Copy>(db, COPY_STORE);
      }
      const isSuccess = await copyRepo.create(copy);
      if (isSuccess) {
        this.copyList = await copyRepo.readAll();
      }
    },
    async deleteCopy(index: number) {
      if (!copyRepo) {
        const db = await getIDB(COPY_DB, (evt) => {
          const db = (evt.target as IDBOpenDBRequest).result;
          db.createObjectStore(COPY_STORE, {
            keyPath: "id",
            autoIncrement: true,
          });
        });
        copyRepo = new IndexedDBRepo<Copy>(db, COPY_STORE);
      }
      const isSuccess = await copyRepo.delete(index);
      if (isSuccess) {
        this.copyList = await copyRepo.readAll();
      }
    },
  },
});
