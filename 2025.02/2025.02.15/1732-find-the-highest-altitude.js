/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  // Solution: 1 Iteration + Max from current
  // Time: O(N)
  // Space: O(1)

  let curr = 0,
    max = 0;
  for (const diff of gain) {
    curr += diff;
    max = Math.max(max, curr);
  }
  return max;
};

console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0
