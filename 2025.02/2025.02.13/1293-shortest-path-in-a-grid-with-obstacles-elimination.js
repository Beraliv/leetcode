import { Queue } from "@datastructures-js/queue";

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (grid, k) {
  // Solution 1: BFS + Cache
  // Time: O(N * K), where N - number of cells, K - a quota
  // Space: O(N * K)

  const m = grid.length;

  if (m === 0) {
    return -1;
  }

  const n = grid[0].length;

  if (k >= m + n - 2) {
    return m + n - 2;
  }

  if (k < grid[0][0]) {
    return -1;
  }

  const queue = new Queue();
  const visited = Array(m)
    .fill(0)
    .map(() => Array(n).fill(undefined));

  queue.enqueue([0, 0, 0, k - grid[0][0]]);
  visited[0][0] = 0;

  while (!queue.isEmpty()) {
    const [x0, y0, len, left] = queue.dequeue();

    if (x0 === m - 1 && y0 === n - 1) {
      return len;
    }

    for (const [dx, dy] of directions) {
      const x = x0 + dx;
      const y = y0 + dy;

      if (x < 0 || x >= m) continue;
      if (y < 0 || y >= n) continue;
      if (left < grid[x][y]) continue;

      const nextLeft = left - grid[x][y];

      if (typeof visited[x][y] === "number" && visited[x][y] >= nextLeft)
        continue;

      queue.enqueue([x, y, len + 1, nextLeft]);
      visited[x][y] = nextLeft;
    }
  }

  return -1;

  // TODO: Solution 2: A*
  // Time: O(N * K * log(N * K))
  // Space: O(N * K)
};

console.log(
  shortestPath(
    [
      //        0  1  2  3  4  5  6  7  8  9
      /*  0 */ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      /*  1 */ [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      /*  2 */ [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      /*  3 */ [0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
      /*  4 */ [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      /*  5 */ [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      /*  6 */ [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      /*  7 */ [0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
      /*  8 */ [0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
      /*  9 */ [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      /* 10 */ [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
      /* 11 */ [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    ],
    1
  )
);
