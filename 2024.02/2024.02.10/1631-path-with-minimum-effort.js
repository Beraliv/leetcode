const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const canReachDestination = (heights, k) => {
  // O(M * N) time, O(M * N) space
  const n = heights.length;
  const m = heights[0].length;

  const queue = new Queue();
  queue.enqueue({ x: 0, y: 0 });
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => false)
  );
  visited[0][0] = true;

  while (!queue.isEmpty()) {
    const point = queue.dequeue();

    if (point.x === n - 1 && point.y === m - 1) {
      return true;
    }

    for (const [dx, dy] of directions) {
      const x = point.x + dx;
      const y = point.y + dy;

      if (x < 0 || x >= n || y < 0 || y >= m || visited[x][y]) {
        continue;
      }

      const diff = Math.abs(heights[x][y] - heights[point.x][point.y]);
      if (diff <= k) {
        visited[x][y] = true;
        queue.enqueue({ x, y });
      }
    }
  }

  return false;
};

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  // Solution 1. O(M * N * log(M * N)) time, O(M * N) space
  //   const n = heights.length;
  //   const m = heights[0].length;

  //   const diffs = Array.from({ length: n }, () =>
  //     Array.from({ length: m }, () => Infinity)
  //   );
  //   diffs[0][0] = 0;

  //   const minQueue = new MinPriorityQueue({ priority: (point) => point.diff });
  //   minQueue.enqueue({ x: 0, y: 0, diff: 0 });
  //   const visited = Array.from({ length: n }, () =>
  //     Array.from({ length: m }, () => false)
  //   );

  //   while (!minQueue.isEmpty()) {
  //     const point = minQueue.dequeue().element;
  //     if (point.x === n - 1 && point.y === m - 1) {
  //       return point.diff;
  //     }

  //     visited[point.x][point.y] = true;

  //     for (const [dx, dy] of directions) {
  //       const x = point.x + dx;
  //       const y = point.y + dy;

  //       if (x < 0 || x >= n || y < 0 || y >= m || visited[x][y]) {
  //         continue;
  //       }

  //       const diff = Math.max(
  //         Math.abs(heights[x][y] - heights[point.x][point.y]),
  //         point.diff
  //       );
  //       if (diff < diffs[x][y]) {
  //         diffs[x][y] = diff;
  //         minQueue.enqueue({ x, y, diff });
  //       }
  //     }
  //   }

  //   return diffs[n - 1][m - 1];
  // Solution 2. Binary search + BFS
  let start = 0,
    end = 1_000_000;
  while (start <= end) {
    const middle = (start + end) >> 1;
    if (canReachDestination(heights, middle)) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return start;
};
