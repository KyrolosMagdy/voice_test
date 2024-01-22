export const fizzBuzz = (n: number, limit: number): string[] => {
  let answer: string[] = [];
  for (let i = n; i < limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 3 === 0) {
      answer.push("Fizzs");
    } else if (i % 5 === 0) {
      answer.push("Buzz");
    }
  }

  return answer;
};

console.log(fizzBuzz(1, 16));
