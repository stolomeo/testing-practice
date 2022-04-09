const caesarCipher = require("../src/caesarCipher");

test("Works with 1 shift", () => {
  expect(caesarCipher("oops i am shifted", 1)).toBe("ppqt j bn tijgufe");
});

test("Works with 5 shifts", () => {
  expect(caesarCipher("sdfkjdfskdjfslkdjf", 5)).toBe("xikpoikxpiokxqpiok");
});

test("Works with caps and 2 shifts", () => {
  expect(caesarCipher("HELLO world", 2)).toBe("JGNNQ yqtnf");
});
