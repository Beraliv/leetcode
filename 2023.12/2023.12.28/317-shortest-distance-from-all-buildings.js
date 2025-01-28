/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function (grid) {
  let n = grid.length;
  if (n === 0) {
    return -1;
  }

  let m = grid[0].length;

  const distances = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0));
  const reachedHouses = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0));

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const bfs = (i, j) => {
    const visited = Array(n)
      .fill(0)
      .map(() => Array(m).fill(false));

    const queue = new Queue();
    queue.enqueue({ pos: [i, j], steps: 0 });
    visited[i][j] = true;

    while (!queue.isEmpty()) {
      const {
        pos: [x0, y0],
        steps,
      } = queue.dequeue();

      if (grid[x0][y0] === 0) {
        distances[x0][y0] += steps;
        reachedHouses[x0][y0]++;
      }

      for (const [dx, dy] of directions) {
        const x = x0 + dx;
        const y = y0 + dy;

        if (x < 0 || x >= n) continue;
        if (y < 0 || y >= m) continue;
        if (visited[x][y]) continue;
        if (grid[x][y] !== 0) continue;

        visited[x][y] = true;

        queue.enqueue({ pos: [x, y], steps: steps + 1 });
      }
    }
  };

  let houseCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        houseCount++;
        bfs(i, j);
      }
    }
  }

  let minDistance = Infinity;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (reachedHouses[i][j] === houseCount) {
        minDistance = Math.min(minDistance, distances[i][j]);
      }
    }
  }

  return minDistance === Infinity ? -1 : minDistance;
};
