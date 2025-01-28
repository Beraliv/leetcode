/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function (nums, k) {
  const countMap = new Map();
  for (const num of nums) {
    const count = (countMap.get(num) || 0) + 1;
    countMap.set(num, count);
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (countMap.get(nums[i]) === 0) {
      continue;
    }

    for (let j = 0; j < k; j++) {
      const num = nums[i] + j;
      const count = countMap.get(num) || 0;

      if (count === 0) {
        return false;
      }

      countMap.set(num, count - 1);
    }
  }

  return true;
};
