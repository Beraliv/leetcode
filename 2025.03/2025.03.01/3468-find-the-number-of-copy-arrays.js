/**
 * @param {number[]} original
 * @param {number[][]} bounds
 * @return {number}
 */
var countArrays = function (original, bounds) {
  // Solution: 1 Iteration + Interval checking
  // Time: O(N)
  // Space: O(1)

  if (original.length === 0) {
    return 0;
  }

  let start = bounds[0][0],
    end = bounds[0][1];

  for (let i = 1; i < original.length; i++) {
    let diff = original[i] - original[i - 1];
    start = Math.max(start + diff, bounds[i][0]);
    end = Math.min(end + diff, bounds[i][1]);
  }

  return Math.max(end - start + 1, 0);
};

// start = -1, end = 12, count = 14
// diff = 1, start = 1, end = 11, count = 11
// diff = 2, start = 3, end = 10, count = 8
// diff = 1, start = 5, end = 9, count = 5

// original = [3, 4, 6, 7]
// bounds = [[-1,12], [1,11],[3,10],[5,9]]
// answer
// 1. [1,2,4,5]
// 2. [2,3,5,6]
// 3. [3,4,6,7]
// 4. [4,5,7,8]
// 5. [5,6,8,9]
