/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  // Solution: Greedy + Iteration + Bit Manipulation
  // Time: O(N)
  // Space: O(1)

  let count = 0;
  let n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] === 0) {
      count++;
      nums[i] = 1;
      nums[i + 1] ^= 1;
      nums[i + 2] ^= 1;
    }
  }

  if (nums[n - 2] === 1 && nums[n - 1] === 1) {
    return count;
  }

  return -1;
};

console.log(minOperations([0, 1, 1, 1, 0, 0])); // 3
// 1 0 0 1 0 0
// 1 1 1 0 0 0
// 1 1 1 1 1 1
console.log(minOperations([0, 0, 1, 1, 0, 0])); // -1
