import "fake-indexeddb/auto";
import { test, expect, beforeAll } from "@jest/globals";
import getIDB from "@/utils/getIDB";
import IndexedDBRepo from "@/classes/Repo/IndexedDBRepo";
/**
 * data type (not stored)
 */
type Data = {
  id?: number;
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

let testRepo: IndexedDBRepo<Data> | null = null;

beforeAll(async () => {
  await getIDB("testDB", (evt) => {
    const _db = (evt.target as IDBOpenDBRequest).result;
    testRepo = new IndexedDBRepo<Data>(_db, "testRepo", {
      keyPath: "id",
      autoIncrement: true,
    });
  });

  await testRepo?.create(data);
});
test("readAll entity", async () => {
  /**
   * there is only one entity now
   */
  const entityList = await testRepo?.readAll();
  expect(entityList).toHaveLength(1);
});

test("create entity", async () => {
  expect(testRepo).not.toBe(null);
  if (!testRepo) return;

  const newData = {
    message: "i'm new",
    date: new Date(),
  };
  /**
   * create method return isSuccess condition
   */
  const isSuccess = await testRepo?.create(newData);
  expect(isSuccess).toBe(true);

  /**
   * there is two entity now
   */
  const entityList = await testRepo?.readAll();
  expect(entityList).toHaveLength(2);
});

test("read entity", async () => {
  expect(testRepo).not.toBe(null);
  if (!testRepo) return;
  /**
   * read one entity
   * entity has id property because of autoIncrement option
   */
  const entity = await testRepo.read(1);
  expect(entity).toStrictEqual({
    id: 1,
    ...data,
  });
});

test("update entity", async () => {
  expect(testRepo).not.toBe(null);
  if (!testRepo) return;
  const originEntity = await testRepo.read(1);

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
  const isSuccess = await testRepo.update(changedEntity);
  expect(isSuccess).toBe(true);

  const entity = await testRepo.read(changedEntity.id);
  expect(entity).toStrictEqual({
    ...changedEntity,
  });
  expect(entity).not.toStrictEqual({
    ...originEntity,
  });
});

test("delete entity", async () => {
  expect(testRepo).not.toBe(null);
  if (!testRepo) return;

  /**
   * originEntityList has two entites
   */
  const originEntityList = await testRepo.readAll();
  expect(originEntityList).toHaveLength(2);

  const entity = originEntityList.at(0);

  if (!entity) return;
  /**
   * delete one of them
   */
  const isSuccess = await testRepo.delete(entity.id);
  expect(isSuccess).toBe(true);

  /**
   * now there is only one entity
   */
  const changedEntityList = await testRepo.readAll();
  expect(changedEntityList).toHaveLength(1);
});
