/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function (n, rectangles) {
  //

  rectangles.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[2] - b[2];
    }
    return a[0] - b[0];
  }); // sorted by x0

  let latestX1 = -1;
  let xCount = 0;
  for (let i = 0; i < rectangles.length; i++) {
    if (rectangles[i][0] >= latestX1) {
      xCount++;
    }
    latestX1 = Math.max(latestX1, rectangles[i][2]);
  }

  if (xCount >= 3) {
    return true;
  }

  rectangles.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[3] - b[3];
    }
    return a[1] - b[1];
  }); // sorted by y0

  let latestY1 = -1;
  let yCount = 0;
  for (let i = 0; i < rectangles.length; i++) {
    if (rectangles[i][1] >= latestY1) {
      yCount++;
    }
    latestY1 = Math.max(latestY1, rectangles[i][3]);
  }

  return yCount >= 3;
};

console.log(
  checkValidCuts(5, [
    [1, 0, 5, 2],
    [0, 2, 2, 4],
    [3, 2, 5, 3],
    [0, 4, 4, 5],
  ])
); // true
console.log(
  checkValidCuts(4, [
    [0, 0, 1, 1],
    [2, 0, 3, 4],
    [0, 2, 2, 3],
    [3, 0, 4, 3],
  ])
); // true
console.log(
  checkValidCuts(4, [
    [0, 2, 2, 4],
    [1, 0, 3, 2],
    [2, 2, 3, 4],
    [3, 0, 4, 2],
    [3, 2, 4, 4],
  ])
); // false
console.log(
  checkValidCuts(4, [
    [0, 0, 1, 4],
    [1, 0, 2, 3],
    [2, 0, 3, 3],
    [3, 0, 4, 3],
    [1, 3, 4, 4],
  ])
); // false
