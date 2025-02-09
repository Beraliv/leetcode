/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // Solution: topological sort
  // Time: O(V + E)
  // Space: O(V + E)

  if (numCourses === 0) {
    return [];
  }

  const inDegree = Array(numCourses).fill(0);
  const adjMap = new Map();
  for (let v = 0; v < numCourses; v++) {
    adjMap.set(v, []);
  }

  for (const [to, from] of prerequisites) {
    adjMap.get(from).push(to);
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

    for (const neighbour of adjMap.get(v)) {
      inDegree[neighbour]--;

      if (inDegree[neighbour] === 0) {
        sorted.push(neighbour);
      }
    }

    index++;
  }

  return sorted.length === numCourses ? sorted : [];
};
