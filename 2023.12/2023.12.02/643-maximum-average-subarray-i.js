/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  if (nums.length < k) {
    return -1;
  }

  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxSum = sum;

  for (let i = k; i < nums.length; i++) {
    sum -= nums[i - k];
    sum += nums[i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
};
