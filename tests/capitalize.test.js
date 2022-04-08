const capitalize = require("../src/capitalize");

test("capitalizes first letter in string", () => {
  expect(capitalize("john")).toBe("John");
});

test("capitalizes first letter in string", () => {
  expect(capitalize("joaquin")).toBe("Joaquin");
});
