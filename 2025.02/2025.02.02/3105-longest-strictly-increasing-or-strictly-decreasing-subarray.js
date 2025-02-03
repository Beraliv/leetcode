/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  let decreasingIndex = 0;
  let increasingIndex = 0;
  let maxLen = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] <= nums[i]) {
      maxLen = Math.max(maxLen, i - decreasingIndex);
      decreasingIndex = i;
    }
    if (nums[i - 1] >= nums[i]) {
      maxLen = Math.max(maxLen, i - increasingIndex);
      increasingIndex = i;
    }
  }
  maxLen = Math.max(
    maxLen,
    nums.length - decreasingIndex,
    nums.length - increasingIndex
  );
  return maxLen;
};
