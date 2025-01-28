/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let duplicate = -1;

  for (let i = 0; i < nums.length; i++) {
    const value = Math.abs(nums[i]);
    if (nums[value] < 0) {
      duplicate = value;
      break;
    }
    nums[value] *= -1;
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.abs(nums[i]);
  }

  return duplicate;
};
