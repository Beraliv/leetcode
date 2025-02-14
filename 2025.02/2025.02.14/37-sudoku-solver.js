/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // Solution: Backtrack
  // Time: O(9 ^ (M * N))
  // Space: O(M * N)

  const n = 9;
  const rows = Array.from({ length: n }, () => new Map());
  const cols = Array.from({ length: n }, () => new Map());
  const boxes = Array.from({ length: n }, () => new Map());

  let isSolved = false;

  const boxIndex = (row, col) => Math.floor(row / 3) * 3 + Math.floor(col / 3);

  const canPlace = (dString, row, col) => {
    const exists =
      rows[row].has(dString) ||
      cols[col].has(dString) ||
      boxes[boxIndex(row, col)].has(dString);
    return !exists;
  };

  const place = (dString, row, col) => {
    rows[row].set(dString, (rows[row].get(dString) || 0) + 1);
    cols[col].set(dString, (cols[col].get(dString) || 0) + 1);
    let box = boxIndex(row, col);
    boxes[box].set(dString, (boxes[box].get(dString) || 0) + 1);
    board[row][col] = dString;
  };

  const iterate = (row, col) => {
    if (col === n - 1 && row === n - 1) {
      isSolved = true;
    } else {
      if (col === n - 1) {
        backtrack(row + 1, 0);
      } else {
        backtrack(row, col + 1);
      }
    }
  };

  const displace = (dString, row, col) => {
    rows[row].delete(dString);
    cols[col].delete(dString);
    let box = boxIndex(row, col);
    boxes[box].delete(dString);
    board[row][col] = ".";
  };

  const backtrack = (row, col) => {
    if (board[row][col] === ".") {
      for (let d = 1; d < 10; d++) {
        const dString = String(d);
        if (canPlace(dString, row, col)) {
          place(dString, row, col);
          iterate(row, col);
          if (!isSolved) {
            displace(dString, row, col);
          }
        }
      }
    } else {
      iterate(row, col);
    }
  };

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (board[row][col] !== ".") {
        place(board[row][col], row, col);
      }
    }
  }

  backtrack(0, 0);
};

const unsolvedSudoku = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(
  `Unsolved: \n${unsolvedSudoku.map((row) => row.join("")).join("\n")}\n`
);
solveSudoku(unsolvedSudoku);
console.log(
  `Solved: \n${unsolvedSudoku.map((row) => row.join("")).join("\n")}\n`
);
