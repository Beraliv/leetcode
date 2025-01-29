/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const inDegree = Array(numCourses).fill(0);
  const graph = new Map();
  for (let v = 0; v < numCourses; v++) {
    graph.set(v, []);
  }

  for (const [to, from] of prerequisites) {
    graph.get(from).push(to);
    inDegree[to]++;
  }

  const sorted = [];

  for (let v = 0; v < numCourses; v++) {
    if (inDegree[v] === 0) {
      sorted.push(v);
    }
  }

  let index = 0;
  while (index < sorted.length) {
    const v = sorted[index];

    for (const neighbour of graph.get(v)) {
      inDegree[neighbour]--;

      if (inDegree[neighbour] === 0) {
        sorted.push(neighbour);
      }
    }

    index++;
  }

  return sorted.length === numCourses ? sorted : [];
};
