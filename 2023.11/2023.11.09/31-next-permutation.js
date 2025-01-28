// nums =           [6,3,9,10,15,2,6,20]
// answer =         [6,3,9,10,15,2,20,6]

// nums =           [1,10,7,4,2]
// step1 =          [2,10,7,4,1]

const findStartOfDecreasingSubsequence = (nums) => {
  let localMax = nums[nums.length - 1];
  let index = nums.length - 2;

  while (index >= 0) {
    let value = nums[index];

    if (value < localMax) {
      break;
    }

    localMax = value;
    index--;
  }

  return index + 1;
};

const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

// sort([3,2,1], 1, 2)
// [0,0] => [2,0] => [2,1]
// [1,2]
// nums[1] = 1
// nums[2] = 2
// [3,1,2]
const sortDecreasingSequence = (nums, startIndex, endIndex) => {
  while (startIndex <= endIndex) {
    swap(nums, startIndex++, endIndex--);
  }
};

const findIndexOfGreaterValue = (nums, i) => {
  for (let j = nums.length - 1; j > i; j--) {
    if (nums[i] < nums[j]) {
      return j;
    }
  }
};

/**
 * 42m + 10m - 2 solutions (+ 1 solution while thinking)
 * O(N) time
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }

  // 1. Iterate on next permutation
  // 1.1 Find the decreasing sub-sequence O(N) time
  const index = findStartOfDecreasingSubsequence(nums);
  // 1.2. Switch between index before decreasing sub-sequence and last index
  if (index > 0) {
    // 1.3. take next value after index - 1
    const swapIndex = findIndexOfGreaterValue(nums, index - 1);
    // O(1) time
    swap(nums, index - 1, swapIndex);
    // O(N) time
    sortDecreasingSequence(nums, index, nums.length - 1);
  } else {
    // O(N) time
    sortDecreasingSequence(nums, 0, nums.length - 1);
  }
};

// [1] => [1]
// [3,2,1] => [1,2,3]
// index = 0
// [2,3,1] =>
// index = 1
// findIndexOfGreaterValue(nums, 1)
//  [2,3,1], 0
// j = 2, 2 < 1
// j = 1, 2 < 3
// return 1
// swap(0, 1) => [3,2,1]
// sort(1, 2) => [3,1,2]

// [1,8,7,6,5,4,3,2,0]
