const isDigit = (ch) => /\d/.test(ch);

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  // Solution: Remove next or previous character
  // Previous can be removed using stack
  // Next character can be removed using indices
  // Time: O(N)
  // Space: O(N)

  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (isDigit(s[i])) {
      if (result.length > 0) {
        result.pop();
      } else if (i + 1 < s.length && !isDigit(s[i + 1])) {
        i++;
      }
    } else {
      result.push(s[i]);
    }
  }

  return result.join("");
};
