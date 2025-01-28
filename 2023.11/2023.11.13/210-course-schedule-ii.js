/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const indegree = Array(numCourses).fill(0);
  const graph = new Map();
  for (let v = 0; v < numCourses; v++) {
    graph.set(v, []);
  }

  for (const [to, from] of prerequisites) {
    graph.get(from).push(to);
    indegree[to]++;
  }

  const sorted = [];

  for (let v = 0; v < numCourses; v++) {
    if (indegree[v] === 0) {
      sorted.push(v);
    }
  }

  let index = 0;
  while (index < sorted.length) {
    const v = sorted[index];

    for (const neighbour of graph.get(v)) {
      indegree[neighbour]--;

      if (indegree[neighbour] === 0) {
        sorted.push(neighbour);
      }
    }

    index++;
  }

  return sorted.length === numCourses ? sorted : [];
};
