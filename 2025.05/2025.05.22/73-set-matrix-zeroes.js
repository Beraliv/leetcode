/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // Solution 1: Hash Set + Iteration
  // Time: O(M * N)
  // Space: O(M + N)

  //   let m = matrix.length;
  //   let n = matrix[0].length;

  //   const zeroRows = new Set();
  //   const zeroCols = new Set();
  //   for (let i = 0; i < m; i++) {
  //     for (let j = 0; j < n; j++) {
  //       if (matrix[i][j] === 0) {
  //         zeroRows.add(i);
  //         zeroCols.add(j);
  //       }
  //     }
  //   }

  //   for (let i = 0; i < m; i++) {
  //     for (let j = 0; j < n; j++) {
  //       if (zeroRows.has(i) || zeroCols.has(j)) {
  //         matrix[i][j] = 0;
  //       }
  //     }
  //   }

  // Solution 2: Store in First Column + Iteration
  // Time: O(M * N)
  // Space: O(1)

  let m = matrix.length;
  let n = matrix[0].length;
  let isZeroCol = false,
    isZeroRow = false;

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      isZeroCol = true;
      break;
    }
  }

  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      isZeroRow = true;
      break;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (isZeroCol) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }

  if (isZeroRow) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
};
