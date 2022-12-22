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

test("create entity", async () => {
  if (testStore === null) return;

  /**
   * create method return isSuccess condition
   */
  const isSuccess = await testStore.create(entity1);
  // expect(result).toBeInstanceOf(Array); // result must be Array<Entity>
  // expect(result).toHaveLength(1); // there is only one entity now
  expect(isSuccess).toBe(true);
});
// test("read entity", async () => {
//   if (testStore === null) return;

//   await testStore.create(entity1);

//   const entity = await testStore.read(1);
//   expect(entity).toStrictEqual({
//     id: 1,
//     ...entity1,
//   });
// });
