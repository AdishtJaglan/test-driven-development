import { capitalize } from "../code/capitalize";

test("capitalize first letter of string", () => {
  expect(capitalize("abcd")).toBe("Abcd");
});

test("undefined value", () => {
  expect(capitalize("")).toBe(-1);
});

test("null value", () => {
  expect(capitalize(null)).toBe(-1);
});
