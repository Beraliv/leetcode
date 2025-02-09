const numberOrFallback = (n, fallback) =>
  typeof n === "number" ? n : fallback;

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  // Solution: binary search
  // Time: O(logN)
  // Space: O(1)

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const middle = (start + end) >> 1;

    const left = numberOrFallback(nums[middle - 1], -Infinity);
    const value = nums[middle];
    const right = numberOrFallback(nums[middle + 1], -Infinity);

    if (left > value) {
      end = middle - 1;
    } else if (right > value) {
      start = middle + 1;
    } else {
      return middle;
    }
  }

  return start;
};

// nums = [1,2,3,4,5,1]
// start = 3, end = 5
// middle = 2
// left = 2, value = 3, right = 4
// middle = 4
// left = 4, value = 5, right = 1
// return 4
