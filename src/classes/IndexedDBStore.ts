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
  async create(entity: E): Promise<E[]> {
    const store = this.#getStore();
    const createRequest = store.add(entity);

    const isSuccess = await this.#runRequest(createRequest);
    if (!isSuccess) throw Error("create request failed");

    return this.#getAll();
  }
  read(id: string): Promise<E> {
    throw new Error("Method not implemented.");
  }
  update(id: string, entity: E): Promise<E[]> {
    throw new Error("Method not implemented.");
  }
  delete(): Promise<E[]> {
    throw new Error("Method not implemented.");
  }
  #getStore(): IDBObjectStore {
    const transaction = this.#db.transaction([this.#storeName], DB_MODE.RW);
    return transaction.objectStore(this.#storeName);
  }
  async #runRequest(request: IDBRequest): Promise<E[] | boolean> {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = () => {
        reject(false);
      };
    });
  }
  async #getAll(): Promise<E[]> {
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
}
