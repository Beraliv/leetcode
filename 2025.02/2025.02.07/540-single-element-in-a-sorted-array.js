/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  // Solution 1: XOR
  // Time: O(N)
  // Space: O(1)

  // return nums.reduce((acc, val) => acc ^ val);

  // Solution 2: Binary Search (on even indices)
  // Time: O(logN)
  // Space: O(1)

  let start = 0,
    end = nums.length - 1;

  while (start < end) {
    let middle = (start + end) >> 1;

    if (middle % 2 === 1) {
      middle--;
    }

    if (nums[middle] === nums[middle + 1]) {
      start = middle + 2;
    } else {
      end = middle;
    }
  }

  return nums[start];
};
