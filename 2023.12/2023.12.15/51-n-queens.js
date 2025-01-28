const createEmptyBoard = (n) => {
  return Array(n)
    .fill("")
    .map(() => Array(n).fill("."));
};

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const answers = [];

  const columns = new Set();
  const diagonals = new Set();
  const antidiagonals = new Set();

  const isValidPosition = ({ col, row }) => {
    if (columns.has(col)) {
      return false;
    }

    const diagonal = col + row;
    if (diagonals.has(diagonal)) {
      return false;
    }

    const antidiagonal = col - row;
    if (antidiagonals.has(antidiagonal)) {
      return false;
    }

    return true;
  };

  const backtrack = (board, row) => {
    if (row === n) {
      answers.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValidPosition({ col, row })) {
        board[row][col] = "Q";

        columns.add(col);
        diagonals.add(col + row);
        antidiagonals.add(col - row);

        backtrack(board, row + 1);

        columns.delete(col);
        diagonals.delete(col + row);
        antidiagonals.delete(col - row);

        board[row][col] = ".";
      }
    }
  };

  const board = createEmptyBoard(n);

  backtrack(board, 0);

  return answers;
};

// 4
