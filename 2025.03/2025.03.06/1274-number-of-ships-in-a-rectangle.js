/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight
 *     @param {integer[]} bottomLeft
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

function Sea(array) {
  let ships = array;

  /**
   * @param {integer[]} topRight
   * @param {integer[]} bottomLeft
   * @return {boolean}
   */
  this.hasShips = function (topRight, bottomLeft) {
    const startX = bottomLeft[0],
      startY = bottomLeft[1];
    const endX = topRight[0],
      endY = topRight[1];

    const isInRectangle = (position) => {
      const positionX = position[0],
        positionY = position[1];

      return (
        startX <= positionX &&
        positionX <= endX &&
        startY <= positionY &&
        positionY <= endY
      );
    };

    for (const ship of ships) {
      if (isInRectangle(ship)) {
        return true;
      }
    }
    return false;
  };
}

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 */
var countShips = function (sea, topRight, bottomLeft) {
  // Solution: Divide and Conquer
  // Time: O(S * (log2(max(M, N)) - log4(S))), where S is number of
  // ships, M is width, N - height
  // Space: log2(max(M, N))

  const x0 = bottomLeft[0],
    y0 = bottomLeft[1];
  const x2 = topRight[0],
    y2 = topRight[1];

  if (x0 > x2 || y0 > y2) {
    return 0;
  }

  if (!sea.hasShips([x2, y2], [x0, y0])) {
    return 0;
  }

  if (x0 === x2 && y0 === y2) {
    // console.log(`found at (${x0}, ${y0})`);
    return 1;
  }

  const x1 = (x0 + x2) >> 1;
  const y1 = (y0 + y2) >> 1;

  return (
    // (x0, y2)   (x1, y2)   (x1+1, y2)   (x2, y2)
    // (x0, y1+1) (x1, y1+1) (x1+1, y1+1) (x2, y1+1)
    // (x0, y1)   (x1, y1)   (x1+1, y1)   (x2, y1)
    // (x0, y0)   (x1, y0)   (x1+1, y0)   (x2, y0)
    // oo
    // xo
    countShips(sea, [x1, y1], [x0, y0]) +
    // oo
    // ox
    countShips(sea, [x2, y1], [x1 + 1, y0]) +
    // ox
    // oo
    countShips(sea, [x2, y2], [x1 + 1, y1 + 1]) +
    // xo
    // oo
    countShips(sea, [x1, y2], [x0, y1 + 1])
  );
};

console.log(
  countShips(
    new Sea([
      [1, 1],
      [2, 2],
      [3, 3],
      [5, 5],
    ]),
    [4, 4],
    [0, 0]
  )
);

// console.log(
//   countShips(
//     [
//       [1, 1],
//       [2, 2],
//       [3, 3],
//       [5, 5],
//     ],
//     [1000, 1000],
//     [0, 0]
//   )
// );
