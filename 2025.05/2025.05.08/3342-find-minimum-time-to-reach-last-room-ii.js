import { PriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function (moveTime) {
  // Solution 1: BFS + Priority Queue + Dijkstra
  // Time: O(M * N * log(M * N))
  // Space: O(M * N)

  if (moveTime.length === 0) return 0;

  const m = moveTime.length;

  if (moveTime[0].length === 0) return 0;

  const n = moveTime[0].length;

  const dp = Array.from({ length: m }, () => Array(n).fill(Infinity));
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  const heap = new PriorityQueue((a, b) => (a.time < b.time ? -1 : 1));

  const directions = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
  ];

  dp[0][0] = 0;
  heap.enqueue({ x0: 0, y0: 0, time: 0 });

  while (!heap.isEmpty()) {
    const { x0, y0 } = heap.dequeue();
    if (visited[x0][y0]) {
      continue;
    }
    if (x0 === m - 1 && y0 === n - 1) {
      break;
    }

    visited[x0][y0] = true;

    for (const [dx, dy] of directions) {
      const x = x0 + dx;
      const y = y0 + dy;

      if (x < 0 || x >= m || y < 0 || y >= n) {
        continue;
      }

      const nextTime =
        Math.max(dp[x0][y0], moveTime[x][y]) + ((x0 + y0) % 2) + 1;

      if (nextTime < dp[x][y]) {
        dp[x][y] = nextTime;
        heap.enqueue({ x0: x, y0: y, time: nextTime });
      }
    }
  }

  return dp[m - 1][n - 1];
};

console.log(
  minTimeToReach([
    [0, 4],
    [4, 4],
  ])
); // 7
console.log(
  minTimeToReach([
    [0, 1],
    [1, 2],
  ])
); // 4
console.log(
  minTimeToReach([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])
); // 6
console.log(
  minTimeToReach([
    [0, 0, 0],
    [0, 0, 0],
  ])
); // 4
