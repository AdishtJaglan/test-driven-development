import { analyseArray } from "../code/analyseArray";

describe("analyseArray function", () => {
  test("should return correct result for empty array", () => {
    expect(analyseArray([])).toEqual({
      average: NaN,
      min: undefined,
      max: undefined,
      length: 0,
    });
  });

  test("should return correct result for array with positive integers", () => {
    expect(analyseArray([5, 10, 15, 20])).toEqual({
      average: 12.5,
      min: 5,
      max: 20,
      length: 4,
    });
  });

  test("should return correct result for array with negative integers", () => {
    expect(analyseArray([-8, -3, -12, -6])).toEqual({
      average: -7.25,
      min: -12,
      max: -3,
      length: 4,
    });
  });

  test("should return correct result for array with mixed integers", () => {
    expect(analyseArray([2, -4, 7, -10, 15])).toEqual({
      average: 2,
      min: -10,
      max: 15,
      length: 5,
    });
  });

  test("should return correct result for array with repeated values", () => {
    expect(analyseArray([3, 3, 3, 3, 3])).toEqual({
      average: 3,
      min: 3,
      max: 3,
      length: 5,
    });
  });
});
