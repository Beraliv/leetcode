/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => a - b);

  let sum = nums.reduce((acc, num) => acc + num, 0);

  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];

    if (i < 2) {
      return -1;
    }

    if (num < sum - num) {
      return sum;
    }

    sum -= num;
  }

  return -1;
};
