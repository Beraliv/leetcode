/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // Time: O(N^2)
  // Space: O(N^2)

  const isValidRow = (row) => {
    const set = new Set();
    for (let col = 0; col < 9; col++) {
      const cell = board[row][col];
      if (cell === ".") {
        continue;
      }
      if (set.has(cell)) {
        return false;
      }
      set.add(cell);
    }
    set.clear();
    return true;
  };

  const isValidColumn = (col) => {
    const set = new Set();
    for (let row = 0; row < 9; row++) {
      const cell = board[row][col];
      if (cell === ".") {
        continue;
      }
      if (set.has(cell)) {
        return false;
      }
      set.add(cell);
    }
    set.clear();
    return true;
  };

  const isValidSquare = (row, col) => {
    const set = new Set();
    for (let i = 3 * row; i < 3 * (row + 1); i++) {
      for (let j = 3 * col; j < 3 * (col + 1); j++) {
        const cell = board[i][j];
        if (cell === ".") {
          continue;
        }
        if (set.has(cell)) {
          return false;
        }
        set.add(cell);
      }
    }
    set.clear();
    return true;
  };

  for (let i = 0; i < 9; i++) {
    if (!isValidRow(i) || !isValidColumn(i)) {
      return false;
    }
  }

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (!isValidSquare(row, col)) {
        return false;
      }
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
