/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function (nums, queries) {
  // Solution: Diff Array + Iteration
  // Time: O(N + Q)
  // Space: O(N)

  const diffArray = new Array(nums.length).fill(0);

  for (const [start, end] of queries) {
    diffArray[start] += 1;
    diffArray[end + 1] -= 1;
  }

  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    diff += diffArray[i];
    if (nums[i] - diff > 0) {
      return false;
    }
  }

  return true;
};

console.log(isZeroArray([1, 0, 1], [[0, 2]])); // true
console.log(
  isZeroArray(
    [4, 3, 2, 1],
    [
      [1, 3],
      [0, 2],
    ]
  )
); // false
console.log(
  isZeroArray(
    [2],
    [
      [0, 0],
      [0, 0],
    ]
  )
); // true
