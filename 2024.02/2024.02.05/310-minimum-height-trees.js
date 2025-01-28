/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n < 2) {
    const answer = [];
    for (let v = 0; v < n; v++) {
      answer.push(v);
    }
    return answer;
  }

  const graph = new Map();
  const indegree = Array(n).fill(0);

  for (let v = 0; v < n; v++) {
    graph.set(v, []);
  }

  for (const [v1, v2] of edges) {
    graph.get(v1).push(v2);
    graph.get(v2).push(v1);
    indegree[v1]++;
    indegree[v2]++;
  }

  let queue = [];

  for (let v = 0; v < n; v++) {
    if (indegree[v] === 1) {
      queue.push(v);
    }
  }

  while (n > 2) {
    n -= queue.length;

    const nextQueue = [];

    for (const v1 of queue) {
      for (const v2 of graph.get(v1)) {
        indegree[v2]--;

        if (indegree[v2] === 1) {
          nextQueue.push(v2);
        }
      }
    }

    queue = nextQueue;
  }

  return queue;
};
