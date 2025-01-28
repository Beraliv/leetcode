/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  const directions = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  const dfs = (i, j) => {
    grid[i][j] = "0";

    for (const [di, dj] of directions) {
      const x = i + di;
      const y = j + dj;

      if (x < 0 || x >= grid.length) continue;

      const row = grid[x];

      if (y < 0 || y >= row.length) continue;
      if (row[y] !== "1") continue;

      dfs(x, y);
    }
  };

  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    const gridRow = grid[i];

    for (let j = 0; j < gridRow.length; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
};
