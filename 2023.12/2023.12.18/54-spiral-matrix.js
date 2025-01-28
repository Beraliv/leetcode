const VISITED = -200;

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const answer = [];

  if (m === 0) {
    return answer;
  }

  const n = matrix[0].length;

  // direction:
  // [0, 1] - right
  // [1, 0] - down
  // [0, -1] - left
  // [-1, 0] - up
  const dfs = ({ x0, y0, dx, dy }) => {
    answer.push(matrix[x0][y0]);
    matrix[x0][y0] = VISITED;

    let x = x0 + dx;
    let y = y0 + dy;

    if (0 <= x && x < m && 0 <= y && y < n && matrix[x][y] !== VISITED) {
      return dfs({ x0: x, y0: y, dx, dy });
    }

    // change direction

    x = x0 + dy;
    y = y0 - dx;

    if (0 <= x && x < m && 0 <= y && y < n && matrix[x][y] !== VISITED) {
      return dfs({ x0: x, y0: y, dx: dy, dy: -dx });
    }

    // finish
  };

  dfs({ x0: 0, y0: 0, dx: 0, dy: 1 });

  return answer;
};

// -200 -200 -200
// -200 -200 -200

// m = 2, n = 3
// answer = [1, 2, 3, 6, 5, 4]
// x0 = 0, y0 = 0, dx = 0, dy = 1, x = 0, y = 1
// x0 = 0, y0 = 1, dx = 0, dy = 1, x = 0, y = 2
// x0 = 0, y0 = 2, dx = 0, dy = 1, x = 1, y = 2
// x0 = 1, y0 = 2, dx = 1, dy = 0, x = 1, y = 1
// x0 = 1, y0 = 1, dx = 0, dy = -1, x = 1, y = 0
// x0 = 1, y0 = 0, dx = 0, dy = -1, x = 0, y = 0
// finish
