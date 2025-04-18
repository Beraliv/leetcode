/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  // Solution 1: DP
  // Time: O(N ^ 2)
  // Space: O(N ^ 2)
  let n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][n - 1];
  // TODO: Solution 2: DP + Memory Optimisation (dpCurr + dpPrev)
};

console.log(longestPalindromeSubseq("bbbab")); // 4, bbbb
console.log(longestPalindromeSubseq("cbbd")); // 2, bb
