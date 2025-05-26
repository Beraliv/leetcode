/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function (colors, edges) {
  // Solution: Topological Sort, 2D DP, DFS
  // Time: O(V + E)
  // Space: O(V + E)

  if (colors.length === 0 || edges.length === 0) {
    return 1;
  }

  let maxCount = 0;
  const status = Array(colors.length).fill(0); // UNVISITED
  const count = Array.from({ length: colors.length }, () => Array(26).fill(0));

  const dfs = (v0) => {
    const color = colors.charCodeAt(v0) - 97;

    if (status[v0] === 1 /* VISITING */) return Infinity;
    if (status[v0] === 2 /* VISITED */) return count[v0][color];

    status[v0] = 1; // VISITING

    for (const v1 of adjMap.get(v0)) {
      if (dfs(v1) === Infinity) {
        return Infinity;
      }

      for (let c = 0; c < 26; c++) {
        count[v0][c] = Math.max(count[v0][c], count[v1][c]);
      }
    }

    status[v0] = 2; // VISITED
    count[v0][color]++;

    return count[v0][color];
  };

  const adjMap = new Map();
  for (let v = 0; v < colors.length; v++) {
    adjMap.set(v, []);
  }
  for (const edge of edges) {
    adjMap.get(edge[0]).push(edge[1]);
  }

  for (let v = 0; v < colors.length; v++) {
    maxCount = Math.max(maxCount, dfs(v));
    if (maxCount === Infinity) {
      return -1;
    }
  }

  return maxCount;
};

console.log(
  largestPathValue("abaca", [
    [0, 1],
    [0, 2],
    [2, 3],
    [3, 4],
  ])
); // 3
console.log(largestPathValue("a", [[0, 0]])); // -1
console.log(
  largestPathValue("hhqhuqhqff", [
    [0, 1],
    [0, 2],
    [2, 3],
    [3, 4],
    [3, 5],
    [5, 6],
    [2, 7],
    [6, 7],
    [7, 8],
    [3, 8],
    [5, 8],
    [8, 9],
    [3, 9],
    [6, 9],
  ])
); // 3
console.log(
  largestPathValue("iivvvvv", [
    [0, 1],
    [1, 2],
    [1, 3],
    [2, 3],
    [3, 4],
    [2, 4],
    [3, 5],
    [1, 5],
    [4, 5],
    [5, 6],
  ])
); // 5
console.log(largestPathValue("g", [])); // 1
