const capitalize = require("../src/capitalize");

test("capitalize first letter in string", () => {
  expect(capitalize("john")).toBe("John");
});
