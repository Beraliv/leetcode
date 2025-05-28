import { Queue } from "@datastructures-js/queue";

const buildGraph = (edges) => {
  const graph = {};
  for (const [u, v] of edges) {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
};

const iterateGraph = (graph, start, limit) => {
  const visited = new Set();
  const queue = new Queue([{ node: start, depth: 0 }]);
  let count = 0;

  while (!queue.isEmpty()) {
    const { node, depth } = queue.dequeue();
    if (visited.has(node) || depth > limit) {
      continue;
    }

    visited.add(node);
    count++;

    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        queue.enqueue({ node: neighbour, depth: depth + 1 });
      }
    }
  }

  return count;
};

/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2, k) {
  // Solution: HashMap + BFS
  // Time: O(N ^ 2 + M ^ 2)
  // Space: O(N + M)

  const graph1 = buildGraph(edges1);
  const graph2 = buildGraph(edges2);

  let n = edges1.length + 1;
  let m = edges2.length + 1;

  const target1 = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    target1[i] = iterateGraph(graph1, i, k);
  }

  let max = 0;
  for (let i = 0; i < m; i++) {
    max = Math.max(max, iterateGraph(graph2, i, k - 1));
  }

  const answer = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    answer[i] = target1[i] + max;
  }

  return answer;
};

console.log(
  maxTargetNodes(
    [
      [0, 1],
      [0, 2],
      [2, 3],
      [2, 4],
    ],
    [
      [0, 1],
      [0, 2],
      [0, 3],
      [2, 7],
      [1, 4],
      [4, 5],
      [4, 6],
    ],
    2
  )
); // [9,7,9,8,8]
console.log(
  maxTargetNodes(
    [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ],
    1
  )
); // [6,3,3,3,3]
