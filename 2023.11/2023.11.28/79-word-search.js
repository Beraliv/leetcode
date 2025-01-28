/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const columns = board[0].length;

  const backtrack = (x0, y0, index) => {
    if (index >= word.length) {
      return true;
    }

    if (x0 < 0 || x0 >= rows) return false;
    if (y0 < 0 || y0 >= columns) return false;
    if (board[x0][y0] !== word[index]) return false;

    // mark as visited
    board[x0][y0] = "#";

    const result =
      backtrack(x0 + 1, y0, index + 1) ||
      backtrack(x0, y0 + 1, index + 1) ||
      backtrack(x0 - 1, y0, index + 1) ||
      backtrack(x0, y0 - 1, index + 1);

    // cleanup
    board[x0][y0] = word[index];

    return result;
  };

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < columns; y++) {
      if (backtrack(x, y, 0)) {
        return true;
      }
    }
  }

  return false;
};
