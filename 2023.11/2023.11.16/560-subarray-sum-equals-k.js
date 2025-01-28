/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // Map<CurrentSum, Count>
  const map = new Map();
  let count = 0;

  let currentSum = 0;
  for (const num of nums) {
    currentSum += num;

    count += currentSum === k ? 1 : 0;
    count += map.get(currentSum - k) || 0;

    map.set(currentSum, (map.get(currentSum) || 0) + 1);
  }

  return count;
};
