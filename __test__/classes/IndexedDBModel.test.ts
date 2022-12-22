import "fake-indexeddb/auto";
import { test, expect, beforeAll } from "@jest/globals";
import getIDB from "@/utils/getIDB";
import IndexedDBModel from "@/classes/IndexedDBModel";
/**
 * data type (not stored)
 */
type Data = {
  message: string;
  date: Date;
};

/**
 * example entity
 */
const data: Data = {
  message: "hello",
  date: new Date(),
};

let testStore: IndexedDBModel<Data> | null = null;

beforeAll(async () => {
  await getIDB("testDB", (evt) => {
    const _db = (evt.target as IDBOpenDBRequest).result;
    testStore = new IndexedDBModel<Data>(_db, "testStore", {
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
  expect(testStore).not.toBe(null);
  if (!testStore) return;
  const originEntity = await testStore.read(1);

  expect(originEntity).not.toEqual(undefined);
  if (!originEntity) return;
  /**
   * change message property
   */
  const changedEntity = {
    ...originEntity,
  };
  changedEntity.message = "hi";
  /**
   * update entity
   * parameter is not data but entity
   */
  const isSuccess = await testStore.update(changedEntity);
  expect(isSuccess).toBe(true);

  const entity = await testStore.read(changedEntity.id);
  expect(entity).toStrictEqual({
    ...changedEntity,
  });
  expect(entity).not.toStrictEqual({
    ...originEntity,
  });
});

test("delete entity", async () => {
  expect(testStore).not.toBe(null);
  if (!testStore) return;

  /**
   * originEntityList has two entites
   */
  const originEntityList = await testStore.readAll();
  expect(originEntityList).toHaveLength(2);

  const entity = originEntityList.at(0);

  if (!entity) return;
  /**
   * delete one of them
   */
  const isSuccess = await testStore.delete(entity.id);
  expect(isSuccess).toBe(true);

  /**
   * now there is only one entity
   */
  const changedEntityList = await testStore.readAll();
  expect(changedEntityList).toHaveLength(1);
});
