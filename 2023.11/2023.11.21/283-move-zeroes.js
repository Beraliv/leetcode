/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;

  while (left < nums.length && nums[left] !== 0) {
    left++;
  }

  let right = left + 1;
  while (right < nums.length) {
    if (nums[right] === 0) {
      right++;
      continue;
    }

    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right++;
  }

  return nums;
};
