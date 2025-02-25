/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfSubarrays = function (nums) {
  // Solution: Prefix + Counts (odd/even)
  // Time: O(N)
  // Space: O(1)

  const MOD = 1000000007;
  let count = 0;

  let prefixSum = 0,
    oddCount = 0,
    evenCount = 1;

  for (const num of nums) {
    prefixSum += num;

    if (prefixSum % 2 === 0) {
      count += oddCount;
      evenCount++;
    } else {
      count += evenCount;
      oddCount++;
    }

    count = count % MOD;
  }

  return count;
};
