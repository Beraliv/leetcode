/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  // Solution: Brute Force
  // Time: O(N ^ 2)
  // Space: O(1)

  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        count++;
      }
    }
  }
  return count;
};

console.log(countPairs([1, 2, 3, 4, 5], 2)); // 0
console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2)); // 4
