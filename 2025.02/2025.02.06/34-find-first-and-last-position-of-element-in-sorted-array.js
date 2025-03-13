const binarySearch = (nums, target, bound) => {
  let left = 0,
    right = nums.length - 1;

  let lowerOrUpperMost = -1;

  while (left <= right) {
    const middle = (left + right) >> 1;

    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      lowerOrUpperMost = middle;
      if (bound === "lower") {
        right = middle - 1;
      } else if (bound === "upper") {
        left = middle + 1;
      }
    }
  }

  return lowerOrUpperMost;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = (nums, target) => {
  // Solution: Lower/Upper Bounds
  // Time: O(logN)
  // Space: O(1)

  return [
    binarySearch(nums, target, "lower"),
    binarySearch(nums, target, "upper"),
  ];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
