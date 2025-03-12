const lowerBound = (nums) => {
  let left = 0,
    right = nums.length - 1;
  let index = nums.length;

  while (left <= right) {
    let middle = (left + right) >> 1;

    if (nums[middle] < 0) {
      left = middle + 1;
    } else {
      // nums[middle] >= 0
      right = middle - 1;
      index = middle;
    }
  }

  return index;
};

const upperBound = (nums) => {
  let left = 0,
    right = nums.length - 1;
  let index = nums.length;

  while (left <= right) {
    let middle = (left + right) >> 1;

    if (nums[middle] <= 0) {
      left = middle + 1;
    } else {
      // nums[middle] > 0
      right = middle - 1;
      index = middle;
    }
  }

  return index;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  // Solution: Lower/Upper Bounds
  // Time: O(logN)
  // Space: O(1)
  const upperIndex = upperBound(nums);
  const lowerIndex = lowerBound(nums);
  return Math.max(lowerIndex, nums.length - upperIndex);
};

console.log(maximumCount([-2, -1, 1, 2])); // 2
console.log(maximumCount([-2, -1, 0, 0, 1, 2])); // 2
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])); // 3
console.log(
  maximumCount([-925, -170, -5, 728, 795, 810, 821, 919, 1776, 1861])
); // 7
