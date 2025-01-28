export {};

// it can be replaced to matrix[i][0] and matrix[0][j]
const createBitmask = () => {
  let n = 1n;

  return {
    set(index: number) {
      n |= 1n << BigInt(index);
    },
    has(index: number) {
      return n & (1n << BigInt(index));
    },
  };
};

/**
 * 10m
 * O(M * N) time
 * O(1) space
 * Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;

  // O(1) space
  let rows = createBitmask();
  let columns = createBitmask();

  // O(M * N) time
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const cell = matrix[i][j];

      if (cell === 0) {
        rows.set(i + 1);
        columns.set(j + 1);
      }
    }
  }

  // O(M * N) time
  for (let i = 0; i < m; i++) {
    if (rows.has(i + 1)) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  // O(M * N) time
  for (let j = 0; j < n; j++) {
    if (columns.has(j + 1)) {
      for (let i = 0; i < m; i++) {
        matrix[i][j] = 0;
      }
    }
  }
}
