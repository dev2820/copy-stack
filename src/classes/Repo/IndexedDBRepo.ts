import DB_MODE from "@/constants/DB_MODE";
import type Entity from "@/types/Entity";
import BaseRepo from "@/classes/Repo/BaseRepo";
export default class IndexedDBRepo<Data> extends BaseRepo<Data> {
  #db: IDBDatabase;
  #storeName: string;

  constructor(db: IDBDatabase, storeName: string) {
    super();

    this.#db = db;
    this.#storeName = storeName;
  }
  async create(data: Data): Promise<boolean> {
    const store = this.#getStore();
    const request = store.add(data);

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(true);
      };
      request.onerror = () => {
        reject(false);
      };
    });
  }
  async readAll(): Promise<Entity<Data>[]> {
    return new Promise((resolve, reject) => {
      const store = this.#getStore();
      const request = store.getAll();

      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = () => {
        reject([]);
      };
    });
  }
  async read(id: number): Promise<Entity<Data> | undefined> {
    const store = this.#getStore();
    const request = store.get(id);

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = () => {
        reject(undefined);
      };
    });
  }
  async update(entity: Entity<Data>): Promise<boolean> {
    const store = this.#getStore();
    const request = store.put(entity);

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(true);
      };
      request.onerror = () => {
        reject(false);
      };
    });
  }
  async delete(id: number): Promise<boolean> {
    const store = this.#getStore();
    const request = store.delete(id);

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(true);
      };
      request.onerror = () => {
        reject(false);
      };
    });
  }
  #getStore(): IDBObjectStore {
    const transaction = this.#db.transaction([this.#storeName], DB_MODE.RW);
    return transaction.objectStore(this.#storeName);
  }
}
