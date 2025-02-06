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

  let left = 0,
    right = m * n - 1;

  while (left <= right) {
    const middle = (left + right) >> 1;
    const pivot = getElement(middle);

    if (pivot < target) {
      left = middle + 1;
    } else if (pivot > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};

// index = 11
// m = 3, n = 4
// column = 3
// row = (11 - 3) / 4 = 2

for (let i = 1; i <= 9; i++) {
  console.log(
    searchMatrix(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      i
    )
  );
}
