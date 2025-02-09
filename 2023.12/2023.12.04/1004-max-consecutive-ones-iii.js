/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  // Solution: Sliding Window
  // Time: O(N)
  // Space: O(1)

  let maxCount = 0;
  let left = 0;
  let right = 0;
  let numZeros = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      numZeros++;
    }

    while (numZeros === k + 1) {
      if (nums[left] === 0) {
        numZeros--;
      }
      left++;
    }

    maxCount = Math.max(maxCount, right - left + 1);

    right++;
  }

  return maxCount;
};
