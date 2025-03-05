/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
  // Solution: Geometrical formula
  // Time: O(1)
  // Space: O(1)

  if (n < 1) {
    return 0;
  }

  // n * n - (n - 1) * (n - 1)
  // 2 * n * n - 2 * n + 1
  // 2 * n * (n - 1) + 1

  return 2 * n * (n - 1) + 1;
};

console.log(coloredCells(1));
console.log(coloredCells(2));
console.log(coloredCells(3));
console.log(coloredCells(4));
console.log(coloredCells(5));
