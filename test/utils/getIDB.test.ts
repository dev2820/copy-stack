import "fake-indexeddb/auto";
import getIDB from "@/utils/getIDB";
import { test, expect } from "@jest/globals";

test("get DB", async () => {
  const db = await getIDB("test");
  expect(db).toBeInstanceOf(IDBDatabase);
});
