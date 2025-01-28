/**
 * 28min
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = -Infinity;
  let left = 0;
  let right = 0;
  let numZeros = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      numZeros++;
    }

    while (numZeros === 2) {
      if (nums[left] === 0) {
        numZeros--;
      }
      left++;
    }

    maxCount = Math.max(maxCount, right - left + 1);

    right++;
  }

  return maxCount;
};

// [1, 0, 0, 1, 0, 1, 1, 0, 1, 1]
//  ____ (2)
//        ____ (2)
//           __________ (4)
//                 _____________ (5)
