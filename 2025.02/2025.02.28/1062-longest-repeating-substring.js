/**
 * @param {string} s
 * @return {number}
 */
var longestRepeatingSubstring = function (s) {
  // Solution 1: DP
  // Time: O(N ^ 2)
  // Space: O(N ^ 2)

  const n = s.length;

  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  let maxLength = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (s[i - 1] === s[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        maxLength = Math.max(maxLength, dp[i][j]);
      }
    }
  }

  return maxLength;
};

console.log(longestRepeatingSubstring("abcd")); // 0
console.log(longestRepeatingSubstring("abbaba")); // 2
console.log(longestRepeatingSubstring("aabcaabdaab")); // 3
