import { describe, test, expect } from "@jest/globals";

describe("jest test", () => {
  const a: number = 1,
    b: number = 2;

  test("sum", () => {
    expect(a + b).toBe(3);
  });
});
