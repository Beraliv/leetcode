function findShift(nums) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    const middle = (start + end) >> 1;

    if (nums[start] > nums[middle]) {
      end = middle;
    } else if (nums[middle] > nums[end]) {
      start = middle + 1;
    } else {
      return start;
    }
  }
}

/**
 * 17m
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const n = nums.length;
  // 1. binary search to find the shift
  const shift = findShift(nums);

  // 2. binary search as there is no shift
  let start = 0,
    end = nums.length - 1;
  while (start < end) {
    const middle = (start + end) >> 1;
    const pivot = nums[(middle + shift) % n];
    if (pivot > target) {
      end = middle - 1;
    } else if (pivot < target) {
      start = middle + 1;
    } else {
      return (middle + shift) % n;
    }
  }

  let shiftedIndex = (start + shift) % n;
  if (nums[shiftedIndex] === target) {
    return shiftedIndex;
  }

  return -1;
};

console.log(search([1, 3, 5], 3)); // 1
console.log(search([1], 0)); // -1
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
