import "fake-indexeddb/auto";
import { test, expect, beforeAll } from "@jest/globals";
import getIDB from "@/utils/getIDB";
import IndexedDBStore from "@/classes/IndexedDBStore";

/**
 * data type (not stored)
 */
type Data = {
  message: string;
  date: Date;
};
/**
 * entity type
 */
type Entity = Data & { id: number };

/**
 * create entity
 */
const data: Data = {
  message: "hello",
  date: new Date(),
};

let testStore: IndexedDBStore<Data> | null = null;

beforeAll(async () => {
  await getIDB("testDB", (evt) => {
    const _db = (evt.target as IDBOpenDBRequest).result;
    testStore = new IndexedDBStore<Entity>(_db, "testStore", {
      keyPath: "id",
      autoIncrement: true,
    });
  });

  await testStore?.create(data);
});
test("readAll entity", async () => {
  /**
   * there is only one entity now
   */
  const entityList = await testStore?.readAll();
  expect(entityList).toHaveLength(1);
});

test("create entity", async () => {
  const newData = {
    message: "i'm new",
    date: new Date(),
  };
  /**
   * create method return isSuccess condition
   */
  const isSuccess = await testStore?.create(newData);
  expect(isSuccess).toBe(true);

  /**
   * there is two entity now
   */
  const entityList = await testStore?.readAll();
  expect(entityList).toHaveLength(2);
});

test("read entity", async () => {
  /**
   * read one entity
   * entity has id property because of autoIncrement option
   */
  const entity = await testStore?.read(1);
  expect(entity).toStrictEqual({
    id: 1,
    ...data,
  });
});

test("update entity", async () => {
  const originEntity = await testStore?.read(1);
  const id = originEntity.id;
});
