import { assertEquals } from "@testing/asserts.ts";

Deno.test("sum test should return the correct value", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});
