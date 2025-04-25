/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function (nums, modulo, k) {
  // Solution: HashMap + Prefix Sum
  // Time: O(N)
  // Space: O(N)
  // (prefixSum[i] - prefixSum[j]) % modulo === k
  // prefixSum[j] % module = prefixSum[i] % modulo - k
  // prefixSum[j] = (prefixSum[i] + module - k) % modulo

  let countObj = { 0: 1 };
  let count = 0;
  let prefix = 0;
  for (let i = 0; i < nums.length; i++) {
    prefix += nums[i] % modulo === k ? 1 : 0;
    count += countObj[(prefix + modulo - k) % modulo] || 0;
    countObj[prefix % modulo] = (countObj[prefix % modulo] || 0) + 1;
  }

  return count;
};

console.log(countInterestingSubarrays([3, 2, 4], 2, 1)); // 3
console.log(countInterestingSubarrays([3, 1, 9, 6], 3, 0)); // 2
