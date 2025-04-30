/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  // Solution 1: Number manipulation
  // Time: O(N * log10K)
  // Space: O(1)
  //   let count = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     let digits = 0;
  //     let num = nums[i];
  //     while (num > 0) {
  //       digits++;
  //       num = (num - (num % 10)) / 10;
  //     }
  //     if (digits % 2 === 0) {
  //       count++;
  //     }
  //   }
  //   return count;

  //   Solution 2: Logarithm 10
  //   Time: O(N)
  //   Space: O(1)
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (Math.floor(Math.log10(nums[i]) + 1) % 2 === 0) {
      count++;
    }
  }
  return count;

  // Solution 3: String manipulation
  // Time: O(N)
  // Space: O(1)
  //   let count = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (String(nums[i]).length % 2 === 0) {
  //       count++;
  //     }
  //   }
  //   return count;
};
