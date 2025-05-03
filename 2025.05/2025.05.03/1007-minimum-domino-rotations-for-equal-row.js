/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
  // Solution: Count by first element
  // Time: O(N)
  // Space: O(1)

  if (tops.length !== bottoms.length) {
    return -1;
  }

  const n = tops.length;

  const findMinCount = (num, type) => {
    let sameSide = 1,
      otherSide = 0;

    for (let i = 1; i < n; i++) {
      if (tops[i] === num && bottoms[i] === num) {
        sameSide++;
        otherSide++;
        continue;
      }

      if (tops[i] === num) {
        if (type === "bottom") {
          otherSide++;
        } else {
          sameSide++;
        }
        continue;
      }

      if (bottoms[i] === num) {
        if (type === "top") {
          otherSide++;
        } else {
          sameSide++;
        }
        continue;
      }

      return -1;
    }

    return Math.min(sameSide, n - sameSide, otherSide, n - otherSide);
  };

  const topCount = findMinCount(tops[0], "top");
  const bottomCount = findMinCount(bottoms[0], "bottom");

  if (topCount === -1 && bottomCount === -1) {
    return -1;
  }

  const candidates = [];

  if (topCount !== -1) {
    candidates.push(topCount);
  }

  if (bottomCount !== -1) {
    candidates.push(bottomCount);
  }

  return Math.min(...candidates);
};

console.log(minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2])); // 2
console.log(minDominoRotations([3, 5, 1, 2, 3], [3, 6, 3, 3, 4])); // -1
console.log(minDominoRotations([1, 2, 1, 1], [2, 1, 2, 2])); // 1
console.log(minDominoRotations([3, 1, 1, 1], [1, 3, 1, 3])); // 1
console.log(minDominoRotations([1, 1, 1, 1], [1, 1, 1, 1])); // 0
