/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // Solution 1. O(N) time, O(N) space
  // const min = Array(nums.length).fill(Infinity);
  // min[0] = 0;

  // let right = 1;
  // for (let left = 0; left < nums.length; left++) {
  //     while (right < nums.length && right <= left + nums[left]) {
  //         min[right] = Math.min(min[right], min[left] + 1);
  //         right++;
  //     }
  // }
  // return min[min.length - 1];
  // Solution 2. O(N) time, O(1) space
  let count = 0;
  let globalEnd = 0;
  let localEnd = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    globalEnd = Math.max(globalEnd, i + nums[i]);

    if (i === localEnd) {
      count++;
      localEnd = globalEnd;
    }
  }
  return count;
};
