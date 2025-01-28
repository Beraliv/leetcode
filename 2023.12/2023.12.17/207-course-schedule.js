class Graph {
  constructor(n) {
    this.n = n;
    this.outEdges = {};
    this.inDegree = [];

    for (let i = 0; i < n; i++) {
      this.outEdges[i] = new Set();
      this.inDegree[i] = 0;
    }
  }

  add([to, from]) {
    this.outEdges[from].add(to);
    this.inDegree[to]++;
  }

  topologicalSort() {
    const sorted = [];

    // 1. find nodes without incoming edges - O(N) time
    for (let i = 0; i < this.n; i++) {
      if (this.inDegree[i] === 0) {
        sorted.push(i);
      }
    }

    let order = 0;

    // 2. iterate over these nodes - O(N) time
    while (order < sorted.length) {
      const node = sorted[order];

      for (const neighbour of this.outEdges[node]) {
        // 2.1. find dependant nodes and remove current node from the list - O(1) time
        this.inDegree[neighbour]--;

        if (this.inDegree[neighbour] === 0) {
          sorted.push(neighbour);
        }
      }

      order++;
    }

    if (sorted.length === this.n) {
      return sorted;
    }

    return [];
  }
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = new Graph(numCourses);

  for (const prerequisite of prerequisites) {
    graph.add(prerequisite);
  }

  const sorted = graph.topologicalSort();

  return sorted.length !== 0;
};
