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
const isOperator = (ch) => ["+", "-", "*", "/"].includes(ch);

const integerDivide = (a, b) => {
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

  let sum = 0;
  let previousNumber = 0,
    currentNumber = 0,
    operator = "+";

  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (isDigit(ch)) {
      currentNumber = currentNumber * 10 + Number(ch);
    }
    if (isOperator(ch) || i === s.length - 1) {
      if (operator === "+" || operator === "-") {
        sum += previousNumber;
        previousNumber = operator === "+" ? currentNumber : -currentNumber;
      } else if (operator === "*") {
        previousNumber = previousNumber * currentNumber;
      } else {
        previousNumber = integerDivide(previousNumber, currentNumber);
      }
      operator = ch;
      currentNumber = 0;
    }
    i++;
  }

  return sum;
};

// s = 2+3*4-5/1, s.length = 9

// sum = 9, previousNumber = -5, currentNumber = 0, operator = 1
// i = 8, ch = 1
