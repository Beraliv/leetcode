import { Queue } from "@datastructures-js/queue";

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function (n, edges, query) {
  // Solution: BFS + Connected Components + Bits Manipulation
  // Time: O(N + E + Q)
  // Space: O(N + E)

  const adjList = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    adjList[u].push([v, w]);
    adjList[v].push([u, w]);
  }

  const components = new Array(n).fill(-1);
  const costs = Array(n).fill(Number.MAX_SAFE_INTEGER);

  let id = 0;

  const bfs = (start) => {
    const queue = new Queue();
    queue.enqueue(start);

    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      components[node] = id;

      for (const [neighbor, weight] of adjList[node]) {
        costs[id] &= weight;

        if (components[neighbor] === -1) {
          queue.enqueue(neighbor);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (components[i] === -1) {
      bfs(i);
      id++;
    }
  }

  const answer = [];
  for (const q of query) {
    answer.push(
      components[q[0]] === components[q[1]] ? costs[components[q[0]]] : -1
    );
  }

  return answer;
};

console.log(
  minimumCost(
    5,
    [
      [0, 1, 7],
      [1, 3, 7],
      [1, 2, 1],
    ],
    [
      [0, 3],
      [3, 4],
    ]
  )
); // [1, -1]
