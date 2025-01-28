/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let n = grid.length;
  const map = new Map();

  // O(N ** 2) time
  for (let row = 0; row < n; row++) {
    const stringifiedRow = grid[row].join(",");
    map.set(stringifiedRow, (map.get(stringifiedRow) || 0) + 1);
  }

  // O(N ** 2) time
  let count = 0;
  for (let column = 0; column < n; column++) {
    const columnArray = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      columnArray[i] = grid[i][column];
    }
    const stringifiedColumn = columnArray.join(",");
    count += map.get(stringifiedColumn) || 0;
  }

  return count;
};
