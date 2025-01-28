import { Queue } from "@datastructures-js/queue";

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  // Map<number, number[]>
  const adjacencyMap = new Map();
  const addToAdjacencyMap = (key, value) => {
    const neighbours = adjacencyMap.get(key) || [];
    neighbours.push(value);
    adjacencyMap.set(key, neighbours);
  };
  for (const [v1, v2] of edges) {
    addToAdjacencyMap(v1, v2);
    addToAdjacencyMap(v2, v1);
  }

  // Solution 1. BFS (preferable)

  //   const visited = Array(n).fill(false);

  //   const queue = new Queue();
  //   visited[source] = true;
  //   queue.enqueue(source);
  //   while (!queue.isEmpty()) {
  //     const node = queue.dequeue();

  //     if (node === destination) {
  //       return true;
  //     }

  //     const neighbours = adjacencyMap.get(node);

  //     for (const neighbour of neighbours) {
  //       if (!visited[neighbour]) {
  //         visited[neighbour] = true;

  //         queue.enqueue(neighbour);
  //       }
  //     }
  //   }

  //   return false;

  //   Solution 2. DFS

  const visited = Array(n).fill(false);

  const search = (node) => {
    for (const neighbour of adjacencyMap.get(node)) {
      if (!visited[neighbour]) {
        visited[neighbour] = true;

        if (neighbour === destination) {
          return true;
        }

        if (search(neighbour)) {
          return true;
        }
      }
    }

    return false;
  };

  visited[source] = true;
  return search(source);
};

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);
