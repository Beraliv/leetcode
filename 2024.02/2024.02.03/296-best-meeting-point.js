const minDistance1D = (nums) => {
  let distance = 0;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    distance += nums[right] - nums[left];
    left++;
    right--;
  }
  return distance;
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function (grid) {
  let n = grid.length;

  if (n === 0) {
    return Infinity;
  }

  let m = grid[0].length;

  const rows = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        rows.push(i);
      }
    }
  }

  const cols = [];
  for (let j = 0; j < m; j++) {
    for (let i = 0; i < n; i++) {
      if (grid[i][j] === 1) {
        cols.push(j);
      }
    }
  }

  return minDistance1D(rows) + minDistance1D(cols);
};
