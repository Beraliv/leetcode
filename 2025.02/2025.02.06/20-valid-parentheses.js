const PAIR = {
  ")": "(",
  "}": "{",
  "]": "[",
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (const ch of s) {
    switch (ch) {
      case "(":
      case "{":
      case "[":
        stack.push(ch);
        break;
      default: {
        if (stack.length === 0 || PAIR[ch] !== stack.pop()) {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
};

// [({})]
// stack =>
// true

// [({
// stack => {,(,[
// return false

// ]
// stack =>
// ]
// return false

// [)
// stack => [
// ch = ), ( !== [
// return false
