import { Queue } from "@datastructures-js/queue";

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  // Solution: 1D DP (flatten the board) + BFS
  // Time: O(N ^ 2)
  // Space: O(N ^ 2)

  const n = board.length;

  if (n === 0 || board[0].length !== n) {
    return -1; //
  }

  const getTransition = (value) => {
    const row = Math.floor((value - 1) / n);
    const col = row % 2 === 0 ? (value - 1) % n : n - 1 - ((value - 1) % n);
    return board[n - 1 - row][col];
  };

  const dp = Array(n * n + 1).fill(Infinity);
  dp[1] = 0;
  const queue = new Queue([1]);
  while (!queue.isEmpty()) {
    const position = queue.dequeue();
    const steps = dp[position];

    for (let i = 1; i <= 6; i++) {
      let nextPosition = position + i;

      if (nextPosition > n * n) {
        continue;
      }

      const transition = getTransition(nextPosition);
      if (transition !== -1) {
        // TODO: go at most once
        nextPosition = transition;
      }

      if (dp[nextPosition] > steps + 1) {
        dp[nextPosition] = steps + 1;
        queue.enqueue(nextPosition);
      }
    }
  }

  return dp[n * n] === Infinity ? -1 : dp[n * n];
};

console.log(
  snakesAndLadders([
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1],
  ])
); // 4
