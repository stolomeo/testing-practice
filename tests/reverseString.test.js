const reverseString = require("../src/reverseString");

test("Return the string reversed", () => {
  expect(reverseString("Hello world")).toBe("dlrow olleH");
});
