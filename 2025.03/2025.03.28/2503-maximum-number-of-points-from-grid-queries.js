import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function (grid, queries) {
  // Solution: Array Cache + MinHeap + BFS
  // Time: O(Q * logQ = M * N * log(M * N))
  // Space: O(M * N)

  const m = grid.length;

  if (m === 0) {
    return queries.map(() => 0);
  }

  const n = grid[0].length;
  const result = new Array(queries.length).fill(0);
  const sortedQueries = queries
    .map((query, index) => [query, index])
    .sort((a, b) => a[0] - b[0]);
  const visited = Array.from({ length: m }, () => new Array(n).fill(false));
  const minHeap = new MinPriorityQueue(([x, y]) => grid[x][y]);
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let count = 0;

  minHeap.enqueue([0, 0]);
  visited[0][0] = true;

  for (let i = 0; i < sortedQueries.length; i++) {
    while (
      !minHeap.isEmpty() &&
      (() => {
        const [x, y] = minHeap.front();
        return grid[x][y] < sortedQueries[i][0];
      })()
    ) {
      const [x0, y0] = minHeap.dequeue();
      count++;

      for (const [dx, dy] of directions) {
        const x = x0 + dx;
        const y = y0 + dy;

        if (x >= 0 && x < m && y >= 0 && y < n && !visited[x][y]) {
          minHeap.enqueue([x, y]);
          visited[x][y] = true;
        }
      }
    }

    result[sortedQueries[i][1]] = count;
  }

  return result;
};

console.log(
  maxPoints(
    [
      [1, 2, 3],
      [2, 5, 7],
      [3, 5, 1],
    ],
    [5, 6, 2]
  )
); // [5,8,1]

console.log(
  maxPoints(
    [
      [5, 2, 1],
      [1, 1, 2],
    ],
    [3]
  )
); // [0]
