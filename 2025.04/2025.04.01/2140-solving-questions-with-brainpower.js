/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
  // Solution: DP
  // Time: O(N)
  // Space: O(N)

  const dp = new Array(questions.length).fill(0);

  for (let i = questions.length - 1; i >= 0; i--) {
    const points = questions[i][0];
    const brainpower = questions[i][1];
    dp[i] = Math.max(points + (dp[i + brainpower + 1] || 0), dp[i + 1] || 0);
  }

  return dp[0];
};

console.log(
  mostPoints([
    [3, 2],
    [4, 3],
    [4, 4],
    [2, 5],
  ])
); // 5
