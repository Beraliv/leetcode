/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
  // Solution: Iteration and Condition
  // Time: O(N)
  // Space: O(1)

  let count = 0;
  for (let i = 2; i < nums.length; i++) {
    if (2 * (nums[i] + nums[i - 2]) === nums[i - 1]) {
      count++;
    }
  }
  return count;
};
