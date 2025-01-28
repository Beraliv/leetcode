/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let answer = [];

  const n = mat.length;
  const m = mat[0].length;

  let x = 0;
  let y = 0;

  while (answer.length !== n * m) {
    while (x >= 0 && y < m) {
      answer.push(mat[x--][y++]);
    }

    x++;

    if (y >= m) {
      y--;
      x++;
    }

    while (x < n && y >= 0) {
      answer.push(mat[x++][y--]);
    }

    y++;

    if (x >= n) {
      x--;
      y++;
    }
  }

  return answer;
};

// 0 1 5
// 2 4 6
// 3 7 8
