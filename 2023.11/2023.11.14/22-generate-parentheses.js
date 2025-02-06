/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // Time: O(4 ^ N / N ^ 1/2)
  // Space: O(N) - depth of the recursive calls + current length

  const combinations = [];

  const combine = (opening, closing, current = []) => {
    if (opening + closing === 0) {
      combinations.push(current.join(""));
    }

    if (opening > 0) {
      current.push("(");
      combine(opening - 1, closing, current);
      current.pop();
    }

    // opening >= 0, therefore closing > 0
    if (closing > opening) {
      current.push(")");
      combine(opening, closing - 1, current);
      current.pop();
    }
  };

  combine(n, n);

  return combinations;
};
