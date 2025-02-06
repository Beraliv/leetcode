// supports only integers
const isInteger = (str) => /\d+/.test(str);

const getOperation = (ch) => {
  switch (ch) {
    case "+":
      return (a, b) => a + b;
    case "-":
      return (a, b) => a - b;
    case "*":
      return (a, b) => a * b;
    case "/":
      return (a, b) => {
        const doubleResult = a / b;
        return doubleResult < 0
          ? Math.ceil(doubleResult)
          : Math.floor(doubleResult);
      };
    default:
      return null;
  }
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // Time: O(N)
  // Space: O(N)

  const stack = [];

  for (const token of tokens) {
    if (isInteger(token)) {
      stack.push(Number(token));
    } else {
      const operation = getOperation(token);

      if (operation === null) {
        console.error(`Invalid symbol ${token}, skipping...`);
        continue;
      }

      if (stack.length < 2) {
        throw new Error(
          `Cannot execute binary operator ${token}: expected 2 parameters, but got ${stack.length}`
        );
      }

      const secondOperand = stack.pop();
      const firstOperand = stack.pop();

      stack.push(operation(firstOperand, secondOperand));
    }
  }

  if (stack.length > 1) {
    throw new Error(
      `Calculation isn't complete: expected to have 1 value, but got ${stack.length}`
    );
  }

  return stack.pop();
};

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(evalRPN(["-1", "2", "/"])); // 0
