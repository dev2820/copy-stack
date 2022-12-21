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
  /**
   * create entity
   */
  const entity1: Entity = {
    message: "hello",
    date: new Date(),
  };

  if (testStore === null) return;

  const result = await testStore.create(entity1);
  expect(result).toBeInstanceOf(Array); // result must be Array<Entity>
  expect(result).toHaveLength(1); // there is only one entity now

  const entity = result.at(0);
  expect(entity).toStrictEqual({
    ...entity1,
    id: 1,
  });
});
