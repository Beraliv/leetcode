/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;
  let middle;

  while (left <= right) {
    middle = (left + right) >> 1;

    if (nums[left] > nums[middle]) {
      right = middle;
    } else if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      return nums[left];
    }
  }
};
