/**
 * 12m
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) {
    return false;
  }

  const m = matrix.length;
  const n = matrix[0].length;

  const getElement = (index) => {
    const column = index % n;
    const row = (index - column) / n;

    return matrix[row][column];
  };

  const binarySearch = (start, end) => {
    while (start <= end) {
      const middle = (start + end) >> 1;
      const pivot = getElement(middle);

      if (pivot < target) {
        start = middle + 1;
      } else if (pivot > target) {
        end = middle - 1;
      } else {
        return middle;
      }
    }

    return -1;
  };

  return binarySearch(0, m * n - 1) !== -1;
};

// index = 11
// m = 3, n = 4
// column = 3
// row = (11 - 3) / 4 = 2
