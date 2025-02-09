const getNextPoints = (i, j) => [
  [i, j + 1],
  [i + 1, j + 1],
  [i + 1, j],
  [i + 1, j - 1],
  [i, j - 1],
  [i - 1, j - 1],
  [i - 1, j],
  [i - 1, j + 1],
];

const isInRange = (i, n) => 0 <= i && i < n;
const isPointOnGrid = ([i, j], n) => isInRange(i, n) && isInRange(j, n);

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  //   const n = grid.length;

  //   if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
  //     return -1;
  //   }

  //   let minCount = Infinity;

  //   const queue = new Queue();
  //   grid[0][0] = 1;
  //   queue.enqueue([0, 0]);

  //   while (!queue.isEmpty()) {
  //     const [i, j] = queue.dequeue();
  //     const count = grid[i][j];

  //     if (i === n - 1 && j === n - 1) {
  //       return count;
  //     }

  //     for (const point of getNextPoints(i, j)) {
  //       if (isPointOnGrid(point, n)) {
  //         const [x, y] = point;

  //         if (grid[x][y] === 0) {
  //           grid[x][y] = count + 1;
  //           queue.enqueue([x, y]);
  //         }
  //       }
  //     }
  //   }

  //   return minCount === Infinity ? -1 : minCount;
  // Solution 1: Queue + Array ([x][y] for visited)
  // Solution 2: Queue + Grid mutation (-1 for visited)
  // Time: O(N), where N is a number of cell in a grid
  // Space: O(N) for queue and visited

  const n = grid.length;

  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
    return -1;
  }

  const directions = [
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
  ];
  const queue = new Queue();
  queue.enqueue([0, 0, 1]);
  const visited = Array(n)
    .fill(0)
    .map(() => Array(n).fill(false));

  while (!queue.isEmpty()) {
    const [x0, y0, count] = queue.dequeue();

    if (x0 === n - 1 && y0 === n - 1) {
      return count;
    }

    for (const [dx, dy] of directions) {
      const x = x0 + dx;
      const y = y0 + dy;

      if (visited[x][y]) continue;
      if (x < 0 || x >= n) continue;
      if (y < 0 || y >= n) continue;
      if (grid[x][y] !== 0) continue;

      queue.enqueue([x, y, count + 1]);
      visited[x][y] = true;
    }
  }

  return -1;
};
