/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
  // Solution 1: Pair-wise Comparison
  // Time: O(N)
  // Space: O(1)

  let maxDiff = -Infinity;
  for (let i = 0; i < nums.length - 1; i++) {
    maxDiff = Math.max(maxDiff, Math.abs(nums[i] - nums[i + 1]));
  }
  maxDiff = Math.max(maxDiff, Math.abs(nums[nums.length - 1] - nums[0]));
  return maxDiff;
};
