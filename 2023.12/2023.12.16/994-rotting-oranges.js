/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  if (grid.length < 1) {
    return true;
  }

  const m = grid.length;
  const n = grid[0].length;

  let minDepth = Infinity;
  const queue = new Queue();

  let count = 0;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 2) {
        queue.enqueue({ row, col, depth: 0 });
      } else if (grid[row][col] === 1) {
        count++;
      }
    }
  }

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (!queue.isEmpty()) {
    const { row, col, depth } = queue.dequeue();

    if (grid[row][col] === 1) {
      count--;
      grid[row][col] = 2;
    }

    let found = false;
    for (const [dx, dy] of directions) {
      const x = row + dx;
      const y = col + dy;

      if (x < 0 || x >= m) continue;
      if (y < 0 || y >= n) continue;
      if (grid[x][y] !== 1) continue;

      found = true;
      queue.enqueue({ row: x, col: y, depth: depth + 1 });
    }
    if (!found && count === 0) {
      minDepth = Math.min(minDepth, depth);
    }
  }

  if (count === 0) {
    return minDepth === Infinity ? 0 : minDepth;
  }
  return -1;
};
