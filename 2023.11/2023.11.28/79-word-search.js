/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (word.length === 0) {
    return false;
  }

  const m = board.length;
  if (m === 0) {
    return false;
  }

  const n = board[0].length;

  if (word.length > m * n) {
    return false;
  }

  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const dfs = (x0, y0, index) => {
    if (index === word.length - 1) {
      return board[x0][y0] === word[index];
    }

    if (board[x0][y0] !== word[index]) {
      return false;
    }

    // mark as visited
    board[x0][y0] = "#";

    let result = false;
    for (const [dx, dy] of directions) {
      const x = x0 + dx;
      const y = y0 + dy;

      if (x < 0 || x >= m) continue;
      if (y < 0 || y >= n) continue;

      result ||= dfs(x, y, index + 1);
    }

    // cleanup
    board[x0][y0] = word[index];

    return result;
  };

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (dfs(x, y, 0)) {
        return true;
      }
    }
  }

  return false;
};
