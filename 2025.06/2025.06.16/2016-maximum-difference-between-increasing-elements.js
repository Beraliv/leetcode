/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  // Solution: Minimum + Iteration
  // Time: O(N)
  // Space: O(1)

  let min = Infinity,
    maxDiff = -1;
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    if (nums[i] > min) {
      maxDiff = Math.max(maxDiff, nums[i] - min);
    }
  }
  return maxDiff;
};
