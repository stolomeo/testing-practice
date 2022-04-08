const calculator = require("../src/calculator");

test("Add a and b", () => {
  expect(calculator.add(1, 1)).toBe(2);
});
