export {};

// 35m

const WATER = "0";
const LAND = "1";

function numIslands(grid: string[][]): number {
  // Solution 1. DFS
  // O(M * N) time, O(M * N) space
  //   // for rows
  //   let m = grid.length;
  //   // for columns
  //   let n = grid[0].length;

  //   const dfs = (row: number, column: number): void => {
  //     grid[row][column] = WATER;

  //     if (row + 1 < m && grid[row + 1][column] === LAND) {
  //       dfs(row + 1, column);
  //     }
  //     if (row - 1 >= 0 && grid[row - 1][column] === LAND) {
  //       dfs(row - 1, column);
  //     }
  //     if (column + 1 < n && grid[row][column + 1] === LAND) {
  //       dfs(row, column + 1);
  //     }
  //     if (column - 1 >= 0 && grid[row][column - 1] === LAND) {
  //       dfs(row, column - 1);
  //     }
  //   };

  //   let count = 0;
  //   for (let row = 0; row < m; row++) {
  //     for (let column = 0; column < n; column++) {
  //       if (grid[row][column] === LAND) {
  //         dfs(row, column);
  //         count++;
  //       }
  //     }
  //   }

  //   return count;

  // Solution 2. BFS
  // O(M * N) time, O(min(M, N)) space
  // for rows
  let m = grid.length;
  // for columns
  let n = grid[0].length;

  const bfs = (row: number, column: number): void => {
    // TODO: implement Queue
    // append ([].push)
    // remove ([].shift)
    let queue: [row: number, column: number][] = [[row, column]];

    while (queue.length > 0) {
      const [r, c] = queue.shift()!;

      grid[r][c] = WATER;

      if (r + 1 < m && grid[r + 1][c] === LAND) {
        queue.push([r + 1, c]);
        grid[r + 1][c] = WATER;
      }
      if (r - 1 >= 0 && grid[r - 1][c] === LAND) {
        queue.push([r - 1, c]);
        grid[r - 1][c] = WATER;
      }
      if (c + 1 < n && grid[r][c + 1] === LAND) {
        queue.push([r, c + 1]);
        grid[r][c + 1] = WATER;
      }
      if (c - 1 >= 0 && grid[r][c - 1] === LAND) {
        queue.push([r, c - 1]);
        grid[r][c - 1] = WATER;
      }
    }
  };

  let count = 0;
  for (let row = 0; row < m; row++) {
    for (let column = 0; column < n; column++) {
      if (grid[row][column] === LAND) {
        bfs(row, column);
        count++;
      }
    }
  }

  return count;
}

console.log(
  numIslands([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"],
  ])
);
