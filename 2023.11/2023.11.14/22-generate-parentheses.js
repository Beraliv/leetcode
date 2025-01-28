/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
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

    if (closing > 0 && closing > opening) {
      current.push(")");
      combine(opening, closing - 1, current);
      current.pop();
    }
  };

  combine(n, n);

  return combinations;
};
