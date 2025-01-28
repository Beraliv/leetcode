/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
  if (p === 0) {
    return 0;
  }

  nums.sort((a, b) => a - b);
  let start = 0,
    end = nums[nums.length - 1] - nums[0];

  while (start < end) {
    const middle = (start + end) >> 1;
    if (countPairs(nums, middle) >= p) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }

  return start;
};

const countPairs = (nums, diff) => {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] <= diff) {
      count++;
      i++;
    }
  }

  return count;
};
