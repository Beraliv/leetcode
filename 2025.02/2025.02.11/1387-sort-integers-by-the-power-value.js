/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
  // Solution 1: Bottom to Top dynamic programming + Sort
  // Time: O(P + D * logD), where P is max value of power(x) between lo and hi, and D is `hi - lo` diff
  // Space: O(P), where P is max value of power(x) between lo and hi

  const memo = Array(hi + 1).fill(0);
  memo[0] = 1;
  memo[1] = 1;

  const calculate = (value) => {
    if (memo[value] > 0) {
      return memo[value];
    }

    return (memo[value] =
      1 + (value % 2 === 0 ? calculate(value / 2) : calculate(3 * value + 1)));
  };

  for (let i = 2; i <= hi; i++) {
    calculate(i);
  }

  const range = [];
  for (let i = lo; i <= hi; i++) {
    range.push(i);
  }

  range.sort((a, b) => {
    if (memo[a] === memo[b]) {
      return a - b;
    }
    return memo[a] - memo[b];
  });

  return range[k - 1];
};
