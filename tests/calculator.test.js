const calculator = require("../src/calculator");

test("Add a and b", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("Subtract a and b", () => {
  expect(calculator.subtract(4, 3)).toBe(1);
});

test("Multiply a and b", () => {
  expect(calculator.multiply(12, 12)).toBe(144);
});

test("Divide a and b", () => {
  expect(calculator.divide(14, 2)).toBe(7);
});
