/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  // Solution 1: Min + Set + Unique Count
  // Time: O(N)
  // Space: O(N)

  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) {
      return -1;
    } else if (nums[i] > k) {
      set.add(nums[i]);
    }
  }

  return set.size;
};

console.log(minOperations([5, 2, 5, 4, 5], 2)); // 2
console.log(minOperations([2, 1, 2], 2)); // -1
console.log(minOperations([9, 7, 5, 3], 1)); // 4
