/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  // Solution 1: Store duplicates as sigs in original grid (given numbers are positive), formula
  // Time: O(N ^ 2)
  // Space: O(1)

  //   let repeated = -1,
  //     n = grid.length;

  //   let sum = 0;

  //   for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < n; j++) {
  //       let val = Math.abs(grid[i][j]);
  //       sum += val;

  //       let zeroBased = val - 1;

  //       let col = zeroBased % n;
  //       let row = (zeroBased - col) / n;
  //       if (grid[row][col] > 0) {
  //         grid[row][col] *= -1;
  //       } else {
  //         repeated = val;
  //       }
  //     }
  //   }

  //   if (repeated === -1) {
  //     return [-1, -1];
  //   }

  //   let totalNumbers = n * n;
  //   const missing = (totalNumbers * (totalNumbers + 1)) / 2 - sum + repeated;

  //   return [repeated, missing];

  // Solution 2: 2 Formulae: sum of numbers and sum of squares
  // Time: O(N ^ 2)
  // Space: O(1)

  // perfectSum = sum - duplicate + missing
  // perfectSquareSum = squareSum - duplicate ** 2 + missing ** 2

  // missing - duplicate = perfectSum - sum
  // missing ** 2 - duplicate ** 2 = perfectSquareSum - squareSum
  // (missing + duplicate) * (perfectSum - sum) = perfectSquareSum - squareSum
  // missing + duplicate = (perfectSquareSum - squareSum) / (perfectSum - sum)

  // missing = (perfectSum - sum + (perfectSquareSum - squareSum) / (perfectSum - sum)) / 2
  // duplicate = ((perfectSquareSum - squareSum) / (perfectSum - sum) - (perfectSum - sum)) / 2

  let sum = 0,
    squareSum = 0,
    n = grid.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += grid[i][j];
      squareSum += grid[i][j] * grid[i][j];
    }
  }

  const totalNumbers = n * n;
  // K * (K + 1) / 2;
  // 1 + 2 + 3 + 4 = 4 * 5 / 2 = 10
  const perfectSum = (totalNumbers * (totalNumbers + 1)) / 2;
  // K * (K + 1) * (2 * K + 1) / 6
  // 1 ^ 1 + 2 ^ 2 + ... + N ^ 2
  // N = 4, 4 * 5 * 9 / 6 = 2 * 5 * 3 = 30
  const perfectSquareSum = (perfectSum * 2 * (2 * totalNumbers + 1)) / 6;

  const sumDiff = perfectSum - sum;
  const squareSumDiffDividedBySumDiff =
    (perfectSquareSum - squareSum) / sumDiff;

  const duplicate = (squareSumDiffDividedBySumDiff - sumDiff) / 2;
  const missing = (sumDiff + squareSumDiffDividedBySumDiff) / 2;

  return [duplicate, missing];
};

// console.log(
//   findMissingAndRepeatedValues([
//     [1, 2],
//     [3, 4],
//   ])
// );
console.log(
  findMissingAndRepeatedValues([
    [1, 2],
    [3, 3],
  ])
);
