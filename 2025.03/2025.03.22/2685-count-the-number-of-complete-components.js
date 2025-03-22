/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
  // Solution: Adjacency List + DFS
  // Time: O(N + M)
  // Space: O(N + M)

  const adjMap = new Map();
  for (let v = 0; v < n; v++) {
    adjMap.set(v, []);
  }
  for (const [v1, v2] of edges) {
    adjMap.get(v1).push(v2);
    adjMap.get(v2).push(v1);
  }

  const edgeCount = {};
  const nodeCount = {};

  const dfs = (v0) => {
    visited[v0] = true;
    edgeCount[componentId] += adjMap.get(v0).length;
    nodeCount[componentId]++;
    for (const v1 of adjMap.get(v0)) {
      if (!visited[v1]) {
        dfs(v1);
      }
    }
  };

  const visited = Array(n).fill(false);
  let componentId = 0;
  let complete = 0;
  for (let v = 0; v < n; v++) {
    if (!visited[v]) {
      edgeCount[componentId] = 0;
      nodeCount[componentId] = 0;
      dfs(v);
      if (
        edgeCount[componentId] ===
        nodeCount[componentId] * (nodeCount[componentId] - 1)
      ) {
        complete++;
      }
      componentId++;
    }
  }

  return complete;
};

console.log(
  countCompleteComponents(6, [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
  ])
); // 3

console.log(
  countCompleteComponents(6, [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
    [3, 5],
  ])
); // 2
