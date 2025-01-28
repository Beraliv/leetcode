const ZERO_CODE = "0".charCodeAt(0);

const NINE_CODE = "9".charCodeAt(0);

const isDigit = (ch) =>
  ch.charCodeAt(0) >= ZERO_CODE && ch.charCodeAt(0) <= NINE_CODE;

const top = (stack) => stack[stack.length - 1];

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  // O(maxK ** countK * N) time and space, where maxK is e.g. 20 for (20[a]), countK is number of nested K values, e.g 2 for (1[a2[b]]), N is
  let stack = [];

  let parsedNumber = 0;
  for (const ch of s) {
    if (isDigit(ch)) {
      parsedNumber = parsedNumber * 10 + parseInt(ch);
    } else if (ch === "[") {
      stack.push(parsedNumber);
      parsedNumber = 0;

      stack.push(ch);
    } else if (ch === "]") {
      const reversed = [];
      while (top(stack) !== "[") {
        reversed.push(stack.pop());
      }
      // remove [
      stack.pop();

      const count = stack.pop();
      for (let i = 0; i < count; i++) {
        for (let j = reversed.length - 1; j >= 0; j--) {
          stack.push(reversed[j]);
        }
      }
    } else {
      stack.push(ch);
    }
  }

  return stack.join("");
};
