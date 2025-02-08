/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
  // Solution 1: 2 HashMaps, for ball-color and colour-balls pairs
  // Time: O(N), N is a number of queries
  // Space: O(N)

  if (queries.length === 0) {
    return [];
  }

  const ballColor = new Map();
  const colorBall = new Map();
  const result = Array(queries.length).fill(0);
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    const ball = query[0];
    const color = query[1];

    let previousColor;
    if (ballColor.has(ball)) {
      previousColor = ballColor.get(ball);
    }
    ballColor.set(ball, color);

    if (previousColor) {
      const ballSet = colorBall.get(previousColor);
      ballSet.delete(ball);
      if (ballSet.size === 0) {
        colorBall.delete(previousColor);
      }
    }

    if (!colorBall.has(color)) {
      colorBall.set(color, new Set());
    }
    colorBall.get(color).add(ball);

    result[i] = colorBall.size;
  }

  return result;
};
