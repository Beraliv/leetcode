/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  if (matrix.length === 0) {
    return true;
  }

  let n = matrix.length;
  let m = matrix[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 || j === 0) {
        continue;
      }

      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false;
      }
    }
  }

  return true;
};
