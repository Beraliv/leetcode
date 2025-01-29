const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
  const dfs = (x, y) => {
    let sum = grid[x][y];
    // visited
    grid[x][y] = 0;

    for (const [dx, dy] of directions) {
      const i = x + dx;
      const j = y + dy;

      if (
        0 <= i &&
        i < grid.length &&
        0 <= j &&
        j < grid[i].length &&
        grid[i][j] > 0
      ) {
        sum += dfs(i, j);
      }
    }
    return sum;
  };

  let currMax = -Infinity;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > 0) {
        const curr = dfs(i, j);
        currMax = Math.max(currMax, curr);
      }
    }
  }

  return currMax === -Infinity ? 0 : currMax;
};

// 0 = land
// >0 = water with fish

console.log(
  findMaxFish([
    [0, 2, 1, 0],
    [4, 0, 0, 3],
    [1, 0, 0, 4],
    [0, 3, 2, 0],
  ])
);
console.log(
  findMaxFish([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 1],
  ])
);
