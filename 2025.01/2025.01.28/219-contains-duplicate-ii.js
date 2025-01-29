/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const set = new Set();
  const len = Math.min(k, nums.length);
  for (let i = 0; i <= len; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  if (len === nums.length) {
    return false;
  }
  for (let i = k + 1; i < nums.length; i++) {
    set.delete(nums[i - k - 1]);
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
};

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));
