/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  // Solution 1: DFS + Grid Mutation
  // Time: O(M * N)
  // Space: O(M + N)

  const m = grid.length;

  if (m === 0) {
    return 0;
  }

  const n = grid[0].length;

  const directions = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  const dfs = (x0, y0) => {
    grid[x0][y0] = "0";

    for (const [dx, dy] of directions) {
      const x = x0 + dx;
      const y = y0 + dy;

      if (x < 0 || x >= m) continue;
      if (y < 0 || y >= n) continue;
      if (grid[x][y] !== "1") continue;

      dfs(x, y);
    }
  };

  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
};

console.log(
  numIslands([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"],
  ])
);
