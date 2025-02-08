const binarySearch = (nums, target, bound) => {
  let left = 0,
    right = nums.length - 1;

  let leftOrRightMost = -1;

  while (left <= right) {
    const middle = (left + right) >> 1;

    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      leftOrRightMost = middle;
      if (bound === "left") {
        right = middle - 1;
      } else if (bound === "right") {
        left = middle + 1;
      }
    }
  }

  return leftOrRightMost;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = (nums, target) => {
  return [
    binarySearch(nums, target, "left"),
    binarySearch(nums, target, "right"),
  ];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [3, 4]
