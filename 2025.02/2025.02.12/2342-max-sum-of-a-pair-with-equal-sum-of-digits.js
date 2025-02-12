const getDigitSum = (num) => {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = (num - digit) / 10;
  }
  return sum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  // Solution: HashMap (digit sum, max number) + 1 Iteration
  // Time: O(N), N is a number of elements in an input array
  // Space: O(D), where D is a number of unique digit sums, O(N) in worst case

  let maxMap = new Map();

  let maxSum = -1;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let digitSum = getDigitSum(num);

    if (!maxMap.has(digitSum)) {
      maxMap.set(digitSum, num);
    } else {
      maxSum = Math.max(maxSum, maxMap.get(digitSum) + num);
      maxMap.set(digitSum, Math.max(maxMap.get(digitSum), num));
    }
  }

  return maxSum;
};
