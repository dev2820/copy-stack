import IndexedDBRepo from "@/classes/Repo/IndexedDBRepo";
import type Copy from "@/types/Copy";
import type Entity from "@/types/Entity";
import getIDB from "@/utils/getIDB";
import CRUDable from "@/interfaces/CRUDable";

const COPY_DB = "COPY_DB";
const COPY_STORE = "copyStore";

let _repo: null | IndexedDBRepo<Copy> = null;

export async function initRepo() {
  if (!_repo) {
    const db = await getIDB(COPY_DB, (evt) => {
      const db = (evt.target as IDBOpenDBRequest).result;
      db.createObjectStore(COPY_STORE, {
        keyPath: "id",
        autoIncrement: true,
      });
    });
    _repo = new IndexedDBRepo<Copy>(db, COPY_STORE);
  }
}

const copyRepo: CRUDable<Copy> = {
  async create(data: Copy) {
    if (_repo === null) {
      await initRepo();
    }
    return await _repo!.create(data);
  },
  async read(id: number) {
    if (_repo === null) {
      await initRepo();
    }
    return await _repo!.read(id);
  },
  async readAll() {
    if (_repo === null) {
      await initRepo();
    }
    return await _repo!.readAll();
  },
  async update(data: Entity<Copy>) {
    if (_repo === null) {
      await initRepo();
    }
    return await _repo!.update(data);
  },
  async delete(id: number) {
    if (_repo === null) {
      await initRepo();
    }
    return await _repo!.delete(id);
  },
};

export default copyRepo;
