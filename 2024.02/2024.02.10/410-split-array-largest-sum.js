/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  let max = -Infinity,
    sum = 0;
  for (const num of nums) {
    max = Math.max(max, num);
    sum += num;
  }

  let start = max,
    end = sum;

  while (start <= end) {
    const middle = (start + end) >> 1;

    if (findParts(nums, middle) <= k) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return start;
};

const findParts = (nums, threshold) => {
  let count = 0;
  let picked = 0;
  for (const num of nums) {
    if (picked + num <= threshold) {
      picked += num;
    } else {
      picked = num;
      count++;
    }
  }
  return count + 1;
};
