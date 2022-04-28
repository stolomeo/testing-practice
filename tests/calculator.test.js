const calculator = require("../src/calculator");

test("Adds 2 numbers", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("Subtracts 2 numbers", () => {
  expect(calculator.subtract(4, 3)).toBe(1);
});

test("Multiplies 2 numbers", () => {
  expect(calculator.multiply(12, 12)).toBe(144);
});

test("Divides 2 numbers", () => {
  expect(calculator.divide(14, 2)).toBe(7);
});
