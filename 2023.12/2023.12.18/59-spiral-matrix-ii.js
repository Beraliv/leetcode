/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  const isValidPos = (x) => 0 <= x && x < n;

  let x0 = 0;
  let y0 = 0;
  let dx = 0;
  let dy = 1;
  let value = 1;

  while (value <= n * n) {
    matrix[x0][y0] = value++;

    let x = x0 + dx;
    let y = y0 + dy;

    if (isValidPos(x) && isValidPos(y) && matrix[x][y] === 0) {
      x0 = x;
      y0 = y;
      continue;
    }

    // change direction
    // [0, 1] => [1, 0] => [0, -1] => [-1, 0]

    x = x0 + dy;
    y = y0 - dx;

    if (isValidPos(x) && isValidPos(y) && matrix[x][y] === 0) {
      x0 = x;
      y0 = y;

      [dx, dy] = [dy, -dx];
    }
  }

  return matrix;
};
