/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function (n, relations) {
  const graph = new Map();
  const indegree = Array(n + 1).fill(0);

  for (let v = 1; v <= n; v++) {
    graph.set(v, []);
  }

  for (const [from, to] of relations) {
    graph.get(from).push(to);
    indegree[to]++;
  }

  let queue = [];
  for (let v = 1; v <= n; v++) {
    if (indegree[v] === 0) {
      queue.push(v);
    }
  }

  let semesters = 0;
  while (n > 0 && queue.length > 0) {
    n -= queue.length;

    const newQueue = [];

    for (const v1 of queue) {
      for (const v2 of graph.get(v1)) {
        indegree[v2]--;

        if (indegree[v2] === 0) {
          newQueue.push(v2);
        }
      }
    }

    semesters++;
    queue = newQueue;
  }

  if (n > 0) {
    return -1;
  }

  return semesters;
};
