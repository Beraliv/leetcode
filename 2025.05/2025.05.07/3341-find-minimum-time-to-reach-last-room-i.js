/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function (moveTime) {
  // Solution 1: DFS + Memoization
  // Time: O(M + N)
  // Space: O(M * N)

  if (moveTime.length === 0) return 0;

  const m = moveTime.length;

  if (moveTime[0].length === 0) return 0;

  const n = moveTime[0].length;

  const dp = Array.from({ length: m }, () => Array(n).fill(Infinity));

  const directions = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
  ];

  const dfs = (x0, y0, time) => {
    dp[x0][y0] = time;

    for (const [dx, dy] of directions) {
      const x = x0 + dx;
      const y = y0 + dy;

      if (x < 0 || x >= moveTime.length || y < 0 || y >= moveTime[x].length) {
        continue;
      }

      const nextTime = Math.max(time, moveTime[x][y]) + 1;

      if (dp[x][y] <= nextTime) {
        continue;
      }

      dfs(x, y, nextTime);
    }
  };

  dfs(0, 0, 0);

  return dp[m - 1][n - 1];
};

console.log(
  minTimeToReach([
    [0, 4],
    [4, 4],
  ])
); // 6
console.log(
  minTimeToReach([
    [0, 0, 0],
    [0, 0, 0],
  ])
); // 3
console.log(
  minTimeToReach([
    [56, 93],
    [3, 38],
  ])
); // 39
