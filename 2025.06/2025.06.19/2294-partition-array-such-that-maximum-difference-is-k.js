/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function (nums, k) {
  // Solution: Sort + Greedy
  // Time: O(N * logN)
  // Space: O(N)

  nums.sort((a, b) => a - b);

  let count = 1,
    prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - prev > k) {
      count++;
      prev = nums[i];
    }
  }

  return count;
};

console.log(partitionArray([1, 3, 6, 7, 9], 2)); // 3
console.log(partitionArray([1, 2, 3, 4, 5, 6], 1)); // 3
console.log(partitionArray([1, 2, 3, 4, 5, 6], 0)); // 6
