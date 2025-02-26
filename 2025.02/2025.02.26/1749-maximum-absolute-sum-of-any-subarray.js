/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  // Solution 1: 1 Iteration, for finding minimum and maximum sub-arrays
  // Time: O(N)
  // Space: O(1)
  //   let max = -Infinity;
  //   let min = Infinity;
  //   let nonNegativeSum = 0,
  //     nonPositiveSum = 0;
  //   for (let num of nums) {
  //     nonNegativeSum += num;
  //     nonPositiveSum += num;
  //     max = Math.max(max, nonNegativeSum);
  //     min = Math.min(min, nonPositiveSum);
  //     if (nonNegativeSum < 0) {
  //       nonNegativeSum = 0;
  //     }
  //     if (nonPositiveSum > 0) {
  //       nonPositiveSum = 0;
  //     }
  //   }
  //   return Math.max(max, -min);

  // Solution 2. Prefix sum
  let min = 0,
    max = 0,
    sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    min = Math.min(min, sum);
    max = Math.max(max, sum);
  }

  console.log(max, min);

  return max - min;
};

console.log(maxAbsoluteSum([1, -3, 2, 3, -4])); // 5
console.log(maxAbsoluteSum([-1, 3, -2, -3, 4])); // 5
