/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let maxCount = 0;
  let left = 0;
  let right = 0;
  let numZeros = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      numZeros++;
    }

    while (numZeros === 2) {
      if (nums[left] === 0) {
        numZeros--;
      }
      left++;
    }

    maxCount = Math.max(maxCount, right - left);

    right++;
  }

  return maxCount;
};
