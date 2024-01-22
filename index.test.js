const { fizzBuzz } = require("./index");

test("returning void", () => {
  expect(fizzBuzz(1, 2)).toEqual([]);
});
test("to console log", () => {
  expect(fizzBuzz(1, 16)).toEqual([
    "Fizz",
    "Buzz",
    "Fizz",
    "Fizz",
    "Buzz",
    "Fizz",
    "FizzBuzz",
  ]);
});
