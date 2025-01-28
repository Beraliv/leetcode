// const operators = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b,
//     '*': (a, b) => a * b,
//     '/': (a, b) => Math.floor(a / b)
// }

// const OPERATORS = Object.keys(operators);

// const priorities = {
//     '+': 0,
//     '-': 0,
//     '*': 1,
//     '/': 1
// }

// const top = array => array[array.length - 1];

// // e.g. 3 + 2 * 2 => [3, 2, 2, mult, add]
// const createNotation = str => {
//     const result = [];
//     const operations = [];

//     let number = [];
//     for (const ch of str) {
//         if (/\d/.test(ch)) {
//             number.push(ch);
//         } else {
//             if (number.length > 0) {
//                 result.push(parseInt(number.join('')));
//                 number.length = 0;
//             }
//         }

//         if (ch === ' ') {
//             continue;
//         }

//         if (OPERATORS.includes(ch)) {
//             if (operations.length > 0) {
//                 while (priorities[top(operations)] >= priorities[ch]) {
//                     result.push(operators[operations.pop()]);
//                 }
//             }
//             operations.push(ch);
//         }
//     }

//     if (number.length > 0) {
//         result.push(parseInt(number.join('')));
//         number.length = 0;
//     }

//     while (operations.length > 0) {
//         result.push(operators[operations.pop()]);
//     }

//     return result;
// }

// str = 3+ 2*10
// result = [3, 2, 10, mult, add], operations = [], number = []

// e.g. [3, 2, 2, mult, add] => 7
// const calculateNotation = notation => {
//     const stack = [];
//     for (const element of notation) {
//         if (typeof element === 'number') {
//             stack.push(element);
//         } else {
//             const second = stack.pop();
//             const first = stack.pop();
//             stack.push(element(first, second));
//         }
//     }
//     return stack.pop();
// }

// notation = [3, 2, 10, mult, add]
// stack = [23]
// return 23

const isDigit = (ch) => /\d/.test(ch);

const isWhitespace = (ch) => /\s/.test(ch);

const divide = (a, b) => {
  const result = a / b;

  return result > 0 ? Math.floor(result) : Math.ceil(result);
};

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // Solution 1. Stack, O(N) time, O(N) space
  // // 1. reverse polish notation
  // let notation = createNotation(s);
  // // 2. calculate result
  // const result = calculateNotation(notation);
  // return result;

  // Solution 2. No stack, O(N) time, O(1) space

  let result = 0;
  let currentNumber = 0;
  let lastNumber = 0;
  let operation = "+";

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (isDigit(ch)) {
      currentNumber = 10 * currentNumber + parseInt(ch);
    }

    if ((!isDigit(ch) && !isWhitespace(ch)) || i === s.length - 1) {
      if (operation === "+" || operation === "-") {
        result += lastNumber;
        lastNumber = operation === "+" ? currentNumber : -currentNumber;
      } else if (operation === "*") {
        lastNumber = lastNumber * currentNumber;
      } else if (operation === "/") {
        lastNumber = divide(lastNumber, currentNumber);
      }
      operation = ch;
      currentNumber = 0;
    }
  }

  result += lastNumber;

  return result;
};

// result = 3, currentNumber = 0, lastNumber = 4
// operation = 2
// result = 7
