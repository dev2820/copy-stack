import "fake-indexeddb/auto";
import { test, expect, beforeEach } from "@jest/globals";
import getIDB from "@/utils/getIDB";
import IndexedDBStore from "@/classes/IndexedDBStore";

/**
 * entity type
 */
type Entity = {
  message: string;
  date: Date;
};

/**
 * create entity
 */
const entity1: Entity = {
  message: "hello",
  date: new Date(),
};

let testStore: IndexedDBStore<Entity> | null = null;

beforeEach(async () => {
  await getIDB("testDB", (evt) => {
    const _db = (evt.target as IDBOpenDBRequest).result;
    testStore = new IndexedDBStore<Entity>(_db, "testStore", {
      keyPath: "id",
      autoIncrement: true,
    });
  });
});
test("readAll entity", async () => {
  /**
   * there is no entity now
   */
  const entityList = await testStore?.readAll();
  expect(entityList).toHaveLength(0);
});

test("create entity", async () => {
  /**
   * create method return isSuccess condition
   */
  const isSuccess = await testStore?.create(entity1);
  expect(isSuccess).toBe(true);

  /**
   * there is one entity now
   */
  const entityList = await testStore?.readAll();
  expect(entityList).toHaveLength(1);
});

test("read entity", async () => {
  await testStore?.create(entity1);

  /**
   * read one entity
   * entity has id property because of autoIncrement option
   */
  const entity = await testStore?.read(1);
  expect(entity).toStrictEqual({
    id: 1,
    ...entity1,
  });
});
