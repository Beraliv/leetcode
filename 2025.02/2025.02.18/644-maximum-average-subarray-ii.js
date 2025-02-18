const hasSumAbove = (nums, k, middle) => {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i] - middle;
  }
  if (sum >= 0) {
    return true;
  }
  let prev = 0,
    minSum = 0;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - middle;
    prev += nums[i - k] - middle;
    minSum = Math.min(prev, minSum);
    if (sum >= minSum) {
      return true;
    }
  }
  return false;
};

// console.log(hasSumAbove([1, 12, -5, -6, 50, 3], 4, 8));

const EPS = 0.00001;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // Solution: Binary Search + Linear Check
  // Time: O(N * log((max - min) / 10^-5))
  // Space: O(1)

  if (nums.length === 0) {
    return 0;
  }
  if (k > nums.length) {
    return 0;
  }

  let start = Infinity,
    end = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    start = Math.min(start, nums[i]);
    end = Math.max(end, nums[i]);
  }

  while (end - start >= EPS) {
    const middle = (start + end) / 2;
    // console.log(`middle: ${middle} (start = ${start}, end = ${end})`);
    if (hasSumAbove(nums, k, middle)) {
      start = middle;
    } else {
      end = middle;
    }
  }

  return (start + end) / 2;
};

// console.log(
//   findMaxAverage(
//     [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7],
//     6
//   )
// );
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
