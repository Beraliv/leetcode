const getRotation = (nums) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const middle = (start + end) >> 1;

    // 2 0 1
    if (nums[start] > nums[middle]) {
      end = middle;
    }
    // 1 2 0
    else if (nums[middle] > nums[end]) {
      start = middle + 1;
    }
    // 0 1 2
    else {
      return start;
    }
  }

  return start;
};

/**
 * 17m
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 1. rotation
  const rotation = getRotation(nums);

  const getRotatedIndex = (index) => (index + rotation) % nums.length;
  const getElement = (index) => nums[getRotatedIndex(index)];

  // 2. search with rotation

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const middle = (start + end) >> 1;
    const value = getElement(middle);

    if (value > target) {
      end = middle - 1;
    } else if (value < target) {
      start = middle + 1;
    } else {
      return getRotatedIndex(middle);
    }
  }

  return getElement(start) === target ? getRotatedIndex(start) : -1;
};
