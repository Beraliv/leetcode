/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // Solution: 1 Iteration + Local/Global Maximum
  // Time: O(N)
  // Space: O(1)

  let max = -Infinity;
  let localMax = 0;
  for (let i = 0; i < nums.length; i++) {
    localMax += nums[i];
    max = Math.max(max, localMax);
    if (localMax < 0) {
      localMax = 0;
    }
  }
  return max;
};
