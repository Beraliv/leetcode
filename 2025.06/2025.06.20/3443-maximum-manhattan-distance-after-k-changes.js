/**
 * @param {string} string
 * @param {number} k
 * @return {number}
 */
var maxDistance = function (string, k) {
  // Solution: Iteration + N/E/S/W Counting
  // Time: O(N)
  // Space: O(1)

  //   let n = 0,
  //     e = 0,
  //     s = 0,
  //     w = 0;

  //   let maxDistance = 0;

  //   for (const direction of string) {
  //     if (direction === "N") n++;
  //     else if (direction === "E") e++;
  //     else if (direction === "S") s++;
  //     else if (direction === "W") w++;

  //     const countNS = Math.min(n, s, k);
  //     const countEW = Math.min(e, w, k - countNS);
  //     const newDistance =
  //       Math.abs(n - s) + countNS * 2 + Math.abs(e - w) + countEW * 2;
  //     maxDistance = Math.max(maxDistance, newDistance);
  //   }

  //   return maxDistance;

  // Solution: Iteration + X/Y Counting
  // Time: O(N)
  // Space: O(1)

  let x = 0,
    y = 0;

  let maxDistance = 0;

  for (let i = 0; i < string.length; i++) {
    const direction = string[i];

    if (direction === "N") y++;
    else if (direction === "E") x++;
    else if (direction === "S") y--;
    else if (direction === "W") x--;

    const newDistance = Math.min(Math.abs(x) + Math.abs(y) + k * 2, i + 1);
    maxDistance = Math.max(maxDistance, newDistance);
  }

  return maxDistance;
};

console.log(maxDistance("NWSE", 1)); // 3
console.log(maxDistance("NSWWEW", 3)); // 6
console.log(maxDistance("NSES", 1)); // 4
