import { calci } from "../code/calculator";

test("testing add", () => {
  expect(calci.add(1, 2)).toBe(3);
});

test("testing subtract", () => {
  expect(calci.sub(3, 4)).toBe(-1);
});

test("testing multiply", () => {
  expect(calci.prod(3, 4)).toBe(12);
});
