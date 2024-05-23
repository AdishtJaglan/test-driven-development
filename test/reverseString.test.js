import { revString } from "../code/reverseString";

test("reversing a normal string", () => {
  expect(revString("mynameisadisht")).toBe("thsidasiemanym");
});

test("undefined value", () => {
  expect(revString("")).toBe(-1);
});

test("null value", () => {
  expect(revString(null)).toBe(-1);
});
