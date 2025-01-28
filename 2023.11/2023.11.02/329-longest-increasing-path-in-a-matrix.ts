const directions: [number, number][] = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function longestIncreasingPath(matrix: number[][]): number {
  if (matrix.length === 0) {
    return 0;
  }
  // O(M**2*N**2) time, O(M*N) space
  // 1, 2, 3, ..., M*N=P, sum = P*(P-1) / 2, M**2*N**2
  // memo => O(M * N) time, O(M * N) space
  let rows = matrix.length;
  let columns = matrix[0].length;

  const cache = Array(rows)
    .fill(0)
    .map(() => Array(columns).fill(0));

  function findLocalLIP(row: number, column: number): number {
    if (cache[row][column] > 0) {
      return cache[row][column];
    }

    const element = matrix[row][column];

    for (const [rowDirection, columnDirection] of directions) {
      const nextRow = row + rowDirection;
      const nextColumn = column + columnDirection;

      if (
        0 <= nextRow &&
        nextRow < rows &&
        0 <= nextColumn &&
        nextColumn < columns &&
        matrix[nextRow][nextColumn] > element
      ) {
        cache[row][column] = Math.max(
          cache[row][column],
          findLocalLIP(nextRow, nextColumn)
        );
      }
    }

    return ++cache[row][column];
  }

  let globalLIP = 1;
  // 1. iterate over all cells
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      // 1.1. do dfs with 4 directions to get local max
      const localLIP = findLocalLIP(row, column);
      // 1.2. if local max is gte global max, update the global max
      if (localLIP > globalLIP) {
        globalLIP = localLIP;
      }
    }
  }

  return globalLIP;
}

console.log(
  longestIncreasingPath([
    [7, 7, 5],
    [2, 4, 6],
    [8, 2, 0],
  ])
);
