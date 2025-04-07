/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  // Solution 1: O/1 Knapsack, 2D DP
  // Time: O(N * T) or O(N ^ 2), where T <= N * 100, N <= 200
  // Space: O(N * T) or O(N ^ 2)

  //   const sum = nums.reduce((a, b) => a + b, 0);
  //   if (sum % 2 !== 0) {
  //     return false;
  //   }
  //   const target = sum / 2;
  //   const n = nums.length;

  //   // dp[i][j] = true, iff nums[0..i] can sum to j, or
  //   // dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
  //   const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(false));
  //   for (let i = 0; i <= n; i++) {
  //     dp[i][0] = true;
  //   }
  //   for (let i = 1; i <= n; i++) {
  //     for (let j = 1; j <= target; j++) {
  //       if (nums[i - 1] <= j) {
  //         dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
  //       } else {
  //         dp[i][j] = dp[i - 1][j];
  //       }
  //     }
  //   }

  //   return dp[n][target];

  // Solution 2: O/1 Knapsack, Bitmask DP
  // Time: O(N * T) or O(N ^ 2), where T <= N * 100, N <= 200
  // Space: O(1)

  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 === 1) {
    return false;
  }

  let row = 1n << BigInt(sum / 2);
  for (let i = 0; i < nums.length; i++) {
    row = row | (row >> BigInt(nums[i]));
  }

  return Boolean(row & 1n);
};

// 1 5 5 | 11
console.log(canPartition([1, 5, 11, 5])); // true
// 1 2 3 | 6
console.log(canPartition([1, 6, 3, 2])); // true
// 1 6 | 3 4
console.log(canPartition([1, 3, 4, 6])); // true
// 1 2 4 5 6 | 3 7 8
console.log(canPartition([1, 2, 3, 4, 5, 6, 7, 8]));
