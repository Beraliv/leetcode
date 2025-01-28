import { Queue } from "@datastructures-js/queue";

/**
 *
 * @param {Map<number, number[]>} adjacencyList
 * @param {number} node1
 * @param {number} node2
 */
const hasRouteBetweenNodes = (adjacencyList, n, node1, node2) => {
  const queue = new Queue([node1]);

  const visited = Array(n).fill(false);
  visited[node1] = true;

  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    if (node === node2) {
      return true;
    }

    for (const neighbour of adjacencyList.get(node)) {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        queue.enqueue(neighbour);
      }
    }
  }

  return false;
};

const graph = new Map()
  .set(0, [1, 2, 3, 4, 5, 6])
  .set(1, [2, 3, 4, 5, 6])
  .set(2, [3, 4, 5, 6])
  .set(3, [4, 5, 6])
  .set(4, [5, 6])
  .set(5, [6])
  .set(6, [7]);

console.log(hasRouteBetweenNodes(graph, 8, 0, 7));
