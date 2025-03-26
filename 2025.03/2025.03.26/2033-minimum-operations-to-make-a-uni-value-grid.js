/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
  // Solution: Sort and Median
  // Time: O(N * M * log(N * M))
  // Space: O(N * M)

  const array = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      array.push(grid[i][j]);
    }
  }
  array.sort((a, b) => a - b);

  const median = array[Math.floor(array.length / 2)];
  let operations = 0;
  for (let i = 0; i < array.length; i++) {
    if (Math.abs(array[i] - median) % x !== 0) {
      return -1;
    }
    operations += Math.abs(array[i] - median) / x;
  }
  return operations;
};

console.log(
  minOperations(
    [
      [2, 4],
      [6, 8],
    ],
    2
  )
); // 4
console.log(
  minOperations(
    [
      [1, 5],
      [2, 3],
    ],
    1
  )
); // 5
console.log(
  minOperations(
    [
      [1, 2],
      [3, 4],
    ],
    2
  )
); // -1
