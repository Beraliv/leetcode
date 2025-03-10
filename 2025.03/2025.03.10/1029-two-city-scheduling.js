/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  // Solution: Sort + Greedy
  // Time: O(N * logN)
  // Space: O(logN)

  if (costs.length % 2 !== 0) {
    return -1;
  }

  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));

  let total = 0;
  let n = costs.length / 2;

  for (let i = 0; i < n; i++) {
    total += costs[i][0] + costs[n + i][1];
  }

  return total;
};
