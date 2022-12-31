import "fake-indexeddb/auto";
import getIDB from "@/utils/getIDB";
import { test, expect } from "@jest/globals";

test("get DB", async () => {
  const db = await getIDB("test");
  expect(db).toBeInstanceOf(IDBDatabase);
});

test("onupgradedneeded option", async () => {
  const db = await getIDB("test", (evt: IDBVersionChangeEvent) => {
    expect(evt.target).not.toBe(null);
    expect(evt.target).toHaveProperty("result");
  });
  expect(db).toBeInstanceOf(IDBDatabase);
});
