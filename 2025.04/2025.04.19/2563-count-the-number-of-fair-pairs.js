const lowerBound = (arr, target) => {
  let left = 0,
    right = arr.length - 1;
  let result = 0;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum < target) {
      result += right - left;
      left++;
    } else {
      right--;
    }
  }
  return result;
};

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  // Solution: Sort + 2 Pointers
  // Time: O(N * logN)
  // Space: O(logN)

  nums.sort((a, b) => a - b);

  return lowerBound(nums, upper + 1) - lowerBound(nums, lower);
};

console.log(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6)); // 6
// 0 1 4 4 5 7
console.log(countFairPairs([1, 7, 9, 2, 5], 11, 11)); // 1
