import { assertEquals } from "testing/asserts.ts";
import { test } from "./deps.ts";

test("hello world", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});
