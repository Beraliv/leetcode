/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  if (nums.length < 1) {
    return 0;
  }

  let max = 0;
  let i = 0;

  while (i < nums.length) {
    let localMax = nums[i];
    let j = i + 1;

    while (j < nums.length && nums[j - 1] < nums[j]) {
      localMax += nums[j];
      j++;
    }

    max = Math.max(max, localMax);
    i = j;
  }

  return max;
};
