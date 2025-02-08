/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const middle = (left + right) >> 1;

    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return left;
};

// [0,2,3], 1
// left = 1, right = 0
// middle = 1
// returns 1

// [0,2,3,4], 1
// left = 1, right = 0
// middle = 1
// return 1

// [0,1,2], 3
// left = 3, right = 2
// middle = 1
// return 3
