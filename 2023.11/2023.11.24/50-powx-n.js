/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // Solution: Quick Exponentiation
  // Time: O(logN)
  // Space: O(1)

  let sign = Math.sign(n);
  n = Math.abs(n);

  let result = 1;

  while (n > 0) {
    if (n % 2 === 1) {
      result = result * x;
      n = n - 1;
    }
    x = x * x;
    n = n / 2;
  }

  return sign === -1 ? 1 / result : result;
};
