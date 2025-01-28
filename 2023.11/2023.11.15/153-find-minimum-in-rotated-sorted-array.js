/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const middle = (start + end) >> 1;

    if (nums[start] > nums[middle]) {
      end = middle;
    } else if (nums[middle] > nums[end]) {
      start = middle + 1;
    } else {
      return nums[start];
    }
  }

  return nums[start];
};
