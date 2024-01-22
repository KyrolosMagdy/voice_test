"use strict";
exports.__esModule = true;
exports.fizzBuzz = void 0;
var fizzBuzz = function (n, limit) {
    var answer = [];
    for (var i = n; i < limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            answer.push("Fizz");
        }
        else if (i % 5 === 0) {
            answer.push("Buzz");
        }
    }
    return answer;
};
exports.fizzBuzz = fizzBuzz;
console.log((0, exports.fizzBuzz)(1, 16));
