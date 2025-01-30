// easy
// time is 5m
// Best Conceivable Runtime - O(N)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // O(N) space
  const set = new Set();

  // O(N) time
  for (let i = 0; i < nums.length; i++) {
    // O(1) for Sets
    if (set.has(nums[i])) {
      return true;
    }
    // O(1)
    set.add(nums[i]);
  }
  return false;
};
