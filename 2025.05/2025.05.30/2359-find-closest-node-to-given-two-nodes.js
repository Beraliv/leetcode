import { Queue } from "@datastructures-js/queue";

/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
  // Solution: BFS + Distance Iteration
  // Time: O(N)
  // Space: O(N)

  const bfs = (start) => {
    const distances = Array(edges.length).fill(Infinity);
    const queue = new Queue([start]);
    distances[start] = 0;

    while (!queue.isEmpty()) {
      const current = queue.dequeue();
      const next = edges[current];

      if (next !== -1 && distances[next] === Infinity) {
        distances[next] = distances[current] + 1;
        queue.push(next);
      }
    }

    return distances;
  };

  let n = edges.length;
  const dist1 = bfs(node1);
  const dist2 = bfs(node2);

  let minDistance = Infinity,
    minNode = -1;
  for (let node = 0; node < n; node++) {
    const maxDist = Math.max(dist1[node], dist2[node]);
    if (maxDist < minDistance) {
      minDistance = maxDist;
      minNode = node;
    }
  }

  return minNode;
};

console.log(closestMeetingNode([2, 2, 3, -1], 0, 1)); // 2
console.log(closestMeetingNode([1, 2, -1], 0, 2)); // 2
