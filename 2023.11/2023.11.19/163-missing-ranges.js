/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function (nums, lower, upper) {
  if (nums.length === 0) {
    return [[lower, upper]];
  }

  const answer = [];

  if (lower < nums[0]) {
    answer.push([lower, nums[0] - 1]);
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 < nums[i]) {
      answer.push([nums[i - 1] + 1, nums[i] - 1]);
    }
  }

  if (nums[nums.length - 1] < upper) {
    answer.push([nums[nums.length - 1] + 1, upper]);
  }

  return answer;
};
