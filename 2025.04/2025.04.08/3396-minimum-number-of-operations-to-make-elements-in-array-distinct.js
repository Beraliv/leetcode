/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const counts = new Array(nums.length).fill(1);
  const countMap = {};
  for (let i = nums.length - 1; i >= 0; i--) {
    countMap[nums[i]] = (countMap[nums[i]] || 0) + 1;
    counts[i] =
      (i + 1 < counts.length ? counts[i + 1] : 0) +
      (countMap[nums[i]] > 1 ? 1 : 0);
  }

  let removals = 0;
  for (let i = 0; i < nums.length; i += 3) {
    if (counts[i] > 0) {
      removals++;
    } else {
      break;
    }
  }

  return removals;
};
