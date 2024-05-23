import { caesarCipher } from "../code/caesarCipher";

test("shifts lowercase letters correctly", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("hello", 5)).toBe("mjqqt");
});

test("shifts uppercase letters correctly", () => {
  expect(caesarCipher("ABC", 1)).toBe("BCD");
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
  expect(caesarCipher("HELLO", 5)).toBe("MJQQT");
});

test("maintains case for mixed case strings", () => {
  expect(caesarCipher("aBc", 1)).toBe("bCd");
  expect(caesarCipher("XyZ", 3)).toBe("AbC");
});

test("handles non-alphabetic characters correctly", () => {
  expect(caesarCipher("aBc!@#", 1)).toBe("bCd!@#");
  expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
});

test("handles large shift values correctly", () => {
  expect(caesarCipher("abc", 27)).toBe("bcd"); 
  expect(caesarCipher("xyz", 52)).toBe("xyz"); 
});
