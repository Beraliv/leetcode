/**
 * @param {number} n
 */
var TicTacToe = function (n) {
  this.n = n;
  this.rows = Array(n).fill(0);
  this.columns = Array(n).fill(0);
  this.diags = 0;
  this.antidiags = 0;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {
  const direction = player === 1 ? -1 : 1;

  this.rows[row] += direction;
  if (this.rows[row] === direction * this.n) {
    return player;
  }

  this.columns[col] += direction;
  if (this.columns[col] === direction * this.n) {
    return player;
  }

  if (row + col === this.n - 1) {
    this.diags += direction;

    if (this.diags === direction * this.n) {
      return player;
    }
  }

  if (row - col === 0) {
    this.antidiags += direction;

    if (this.antidiags === direction * this.n) {
      return player;
    }
  }

  return 0;
};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
// const t3 = new TicTacToe(3);
// const moves = [
//   [0, 0, 1],
//   [0, 2, 2],
//   [2, 2, 1],
//   [1, 1, 2],
//   [2, 0, 1],
//   [1, 0, 2],
//   [2, 1, 1],
// ];
const t3 = new TicTacToe(2);
// const moves = [
//   [0, 0, 2],
//   [0, 1, 1],
//   [1, 1, 2],
// ];
const moves = [
  [0, 1, 1],
  [1, 1, 2],
  [1, 0, 1],
];
for (const move of moves) {
  const [row, col, player] = move;
  const result = t3.move(row, col, player);
  console.log(`Player #${player} moved to (${row}, ${col})`, result);
}
