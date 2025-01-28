/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
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
