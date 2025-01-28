export {};

/**
 * Time - 23m30s (primitive)
 * Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length;

  // // O(N ** 2) time and space
  // const copyMatrix = Array(n).fill(0).map(() => Array(n).fill(0));
  // for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < n; j++) {
  //         copyMatrix[i][j] = matrix[i][j];
  //     }
  // }

  // // O(N ** 2) time
  // // (i, j) => (n - 1 - j, i)
  // for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < n; j++) {
  //         matrix[i][j] = copyMatrix[n - 1 - j][i];
  //     }
  // }

  // (i, j) := (j, n - 1 - i)

  for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = temp;
    }
  }
}

const printMatrix = (matrix: number[][]) => {
  const n = matrix.length;
  console.log("-".repeat(n));
  console.log(
    matrix
      .map((row) => row.map((cell) => `${cell}`.padStart(2, " ")).join(" "))
      .join("\n")
  );
  console.log("-".repeat(n));
};

const examples: number[][][] = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ],
];

examples.forEach((example) => {
  printMatrix(example);
  rotate(example);
  printMatrix(example);
});
