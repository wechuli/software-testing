const { generateText, createElement, validateInput } = require("./util");

test("should output name and age", () => {
  const text = generateText("Paul", 29);
  expect(text).toBe("Max");
});
