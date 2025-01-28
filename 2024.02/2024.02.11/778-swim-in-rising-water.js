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
var swimInWater = function (grid) {
  // Solution 1. Dijkstra + BFS (Min Priority Queue)
  // O(N ** 2 * logN) time, O(N ** 2) space
  // const n = grid.length;
  // const m = grid[0].length;

  // const dp = Array.from({length: n}, () => Array.from({length: m}, () => Infinity));
  // dp[0][0] = grid[0][0];

  // const visited = Array.from({length: n}, () => Array.from({length: m}, () => false));
  // const minQueue = new MinPriorityQueue({priority: v => v.depth});
  // minQueue.enqueue({x: 0, y: 0, depth: grid[0][0]});

  // while (!minQueue.isEmpty()) {
  //     const point = minQueue.dequeue().element;
  //     if (point.x === n - 1 && point.y === m - 1) {
  //         return point.depth;
  //     }
  //     visited[point.x][point.y] = true;

  //     for (const [dx, dy] of directions) {
  //         const x = point.x + dx;
  //         const y = point.y + dy;

  //         if (x < 0 || x >= n || y < 0 || y >= m || visited[x][y]) {
  //             continue;
  //         }

  //         const depth = Math.max(point.depth, grid[x][y]);
  //         if (depth < dp[x][y]) {
  //             dp[x][y] = depth;
  //             minQueue.enqueue({x, y, depth});
  //         }
  //     }
  // }

  // return dp[n - 1][m - 1];
  // Solution 2. Binary Search + DFS
  // O(N ** 2 * log(N)) time, O(N ** 2) space
  const n = grid.length;
  let left = grid[0][0],
    right = n * n - 1;
  while (left < right) {
    const middle = (left + right) >> 1;
    const success = canSwim(grid, middle);
    if (success) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  return left;
};

const canSwim = (grid, maxDepth) => {
  const n = grid.length;
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false)
  );

  const dfs = (row, col) => {
    visited[row][col] = true;

    for (const [dx, dy] of directions) {
      const x = row + dx;
      const y = col + dy;

      if (
        x < 0 ||
        x >= n ||
        y < 0 ||
        y >= n ||
        visited[x][y] ||
        grid[x][y] > maxDepth
      ) {
        continue;
      }

      if (x === n - 1 && y === n - 1) {
        return true;
      }

      if (dfs(x, y)) {
        return true;
      }
    }

    return false;
  };

  return dfs(0, 0);
};

// [
// [7,34,16,12,15,0],
// [10,26,4,30,1,20],
// [28,27,33,35,3,8],
// [29,9,13,14,11,32],
// [31,21,23,24,19,18],
// [22,6,17,5,2,25]
// ]
