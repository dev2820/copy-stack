import CRUDable from "@/interfaces/CRUDable";
import DB_MODE from "@/constants/DB_MODE";
export default class IndexedDBStore<E> implements CRUDable<E> {
  #db: IDBDatabase;
  #storeName: string;

  constructor(
    db: IDBDatabase,
    storeName: string,
    option?: IDBObjectStoreParameters
  ) {
    this.#db = db;
    this.#storeName = storeName;
    db.createObjectStore(storeName, option);
  }
  async create(entity: E): Promise<Boolean> {
    const store = this.#getStore();
    const request = store.add(entity);

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(true);
      };
      request.onerror = () => {
        reject(false);
      };
    });
  }
  async readAll(): Promise<E[]> {
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
  async read(id: number): Promise<E | undefined> {
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
  update(id: number, entity: E): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  #getStore(): IDBObjectStore {
    const transaction = this.#db.transaction([this.#storeName], DB_MODE.RW);
    return transaction.objectStore(this.#storeName);
  }
}
