/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxCount = 0;

  for (const num of nums) {
    if (num === 0) {
      maxCount = Math.max(maxCount, count);
      count = 0;
    } else {
      count++;
    }
  }

  return Math.max(maxCount, count);
};
