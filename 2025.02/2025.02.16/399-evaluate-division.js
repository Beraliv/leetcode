import { Queue } from "@datastructures-js/queue";

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  // Solution: HashMap (graph) + BFS
  // Time: O(E * Q)
  // Space: O(E * Q)

  const outEdgeMap = new Map();
  for (let i = 0; i < equations.length; i++) {
    const [from, to] = equations[i];
    const value = values[i];
    if (!outEdgeMap.has(from)) {
      outEdgeMap.set(from, []);
    }
    outEdgeMap.get(from).push([to, value]);
    if (!outEdgeMap.has(to)) {
      outEdgeMap.set(to, []);
    }
    outEdgeMap.get(to).push([from, 1 / value]);
  }

  const bfs = (from, to) => {
    const visited = new Set();
    const queue = new Queue();

    if (outEdgeMap.has(from)) {
      queue.enqueue([from, 1]);
      visited.add(from);
    }

    while (!queue.isEmpty()) {
      const [v, previousWeight] = queue.dequeue();

      if (v === to) {
        return previousWeight;
      }

      for (const [to, weight] of outEdgeMap.get(v)) {
        if (visited.has(to)) {
          continue;
        }

        visited.add(to);
        queue.enqueue([to, previousWeight * weight]);
      }
    }

    return -1;
  };

  const answer = [];
  for (const query of queries) {
    answer.push(bfs(query[0], query[1]));
  }
  return answer;
};

console.log(
  calcEquation(
    [
      ["a", "b"],
      ["b", "c"],
    ],
    [2.0, 3.0],
    [
      ["a", "c"],
      ["b", "a"],
      ["a", "e"],
      ["a", "a"],
      ["x", "x"],
    ]
  )
); // [ 6, 0.5, -1, 1, -1 ]
