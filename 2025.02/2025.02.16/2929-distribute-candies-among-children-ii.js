/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  // Solution 1: DFS - Time Limit Exceeded

  // Solution 2: Combinatorics
  // Time: O(N)
  // Space: O(1)
  let count = 0;
  let m = Math.min(n, limit);
  for (let i = 0; i <= m; i++) {
    const rest = n - i;
    const maxPair = Math.min(rest, limit);
    const minPair = rest - maxPair;
    if (minPair > limit) {
      continue;
    }
    count += maxPair - minPair + 1;
  }
  return count;
};

console.log(distributeCandies(5, 2)); // 3
console.log(distributeCandies(3, 3)); // 10
