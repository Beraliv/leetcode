/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfPower = function (nums, k) {
  // Solution: Knapsack DP + DFS (top to bottom) + Cache
  // Time: O(2 ^ N)
  // Space: O(N * K)

  const mod = 1000000007;

  const dp = Array.from({ length: nums.length + 1 }, () =>
    Array.from({ length: k + 1 }, () => Infinity)
  );

  const dfs = (index, sum) => {
    if (index > nums.length) return 0;
    if (sum > k) return 0;
    if (Number.isFinite(dp[index][sum])) {
      return dp[index][sum];
    }
    if (sum === k) {
      // there are 2^(n - i) subsequences to get the same sum
      // given sum = 3, index = 2, nums = 1, 2, 0, -1
      // the answer will be 2 ^ 2 = 4, since you can have:
      // 1. 1, 2
      // 2. 1, 2, 0
      // 3. 1, 2, -1
      // 4. 1, 2, 0, -1
      return (dp[index][sum] = Math.pow(2, nums.length - index) % mod);
    }

    // 1. When you add `index` to a sum, there is only 1 * N subsequence, where N
    // will be calculated recursively
    // 2. When you don't add `index` to a sum, there are 2 * N subsequences

    return (dp[index][sum] =
      (dfs(index + 1, sum + nums[index]) + 2 * dfs(index + 1, sum)) % mod);
  };

  return dfs(0, 0);
};

// console.log(sumOfPower([1, 2, 3], 3)); // 6
// console.log(
//   sumOfPower(
//     [1, 1, 3, 2, 4, 2, 2, 1, 4, 1, 2, 4, 4, 3, 3, 4, 1, 3, 3, 3, 2, 1, 4, 1, 2],
//     5
//   )
// ); // 85617650
// console.log(
//   sumOfPower(
//     [
//       2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
//       1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
//     ],
//     49
//   )
// ); // 999634217
