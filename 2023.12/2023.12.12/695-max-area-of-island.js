/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  if (grid.length === 0) {
    return 0;
  }

  const n = grid.length;
  const m = grid[0].length;

  let maxArea = 0;
  let area = 0;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const calculateArea = (x0, y0, marker) => {
    grid[x0][y0] = marker;
    area++;

    for (const [dx, dy] of directions) {
      const x = x0 + dx;
      const y = y0 + dy;

      if (x < 0 || x >= n) {
        continue;
      }
      if (y < 0 || y >= m) {
        continue;
      }

      if (grid[x][y] === 1) {
        calculateArea(x, y, marker);
      }
    }
  };

  let island = 2;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      area = 0;
      if (grid[x][y] === 1) {
        calculateArea(x, y, island++);

        if (area > 0) {
          maxArea = Math.max(maxArea, area);
        }
      }
    }
  }

  return maxArea;
};

// [
//      [2, 2, 2],
//      [0, 1, 0]
// ]
// n = 2, m = 3
// maxArea = 0, area = 3
// island = 2
// x = 0, y = 0
// x0 = 0, y0 = 0
// x0 = 0, y0 = 1
// x0 = 0, y0 = 2, x = 1, y = 2
// x0 = 1, y0 = 2
