/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // Solution: Calculate current sum (e.g. sum) and set it to `countMap`
  // If `countMap.has(k - sum)`, add count to the current count
  // Time: O(N)
  // Space: O(N)

  const countMap = new Map();
  countMap.set(0, 1);

  let count = 0,
    sum = 0;

  for (const num of nums) {
    sum += num;
    count += countMap.get(sum - k) || 0;
    countMap.set(sum, (countMap.get(sum) || 0) + 1);
  }

  return count;
};
