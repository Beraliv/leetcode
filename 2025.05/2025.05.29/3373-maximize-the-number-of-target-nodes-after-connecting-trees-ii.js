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

const calculateAnswer = (graph, size, type) => {
  // type (even, 2, or odd, 1) and answer
  const answer = Array(size).fill(0);
  const queue = new Queue([{ node: 0, depth: 0 }]);
  let even = 0;

  while (!queue.isEmpty()) {
    const { node, depth } = queue.dequeue();
    if (answer[node]) {
      continue;
    }
    if (depth % 2 === 0) {
      answer[node] = 2;
      even++;
    } else {
      answer[node] = 1;
      odd++;
    }

    for (const neighbour of graph[node]) {
      if (!answer[neighbour]) {
        queue.enqueue({ node: neighbour, depth: depth + 1 });
      }
    }
  }

  if (type === "odd") {
    return Math.max(size - even, even);
  }

  for (let i = 0; i < size; i++) {
    if (answer[i] === 2) {
      answer[i] = even;
    } else {
      answer[i] = odd;
    }
  }
  return answer;
};

/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2) {
  // Solution: HashMap + BFS
  // Time: O(N + M)
  // Space: O(N + M)

  const graph1 = buildGraph(edges1);
  const graph2 = buildGraph(edges2);

  let n = edges1.length + 1;
  let m = edges2.length + 1;

  const even = calculateAnswer(graph1, n, "even");
  const max = calculateAnswer(graph2, m, "odd");

  const answer = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    answer[i] = even[i] + max;
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
    ]
  )
); // [8,7,7,8,8]
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
    ]
  )
); // [3,6,6,6,6]
