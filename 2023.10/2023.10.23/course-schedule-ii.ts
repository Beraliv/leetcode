type Edge = [to: number, from: number];

class Graph {
  public n: number;
  //   O(E) memory
  public outEdges: Record<number, Set<number>>;
  //   O(E) memory
  public inDegree: number[];

  constructor(n: number) {
    this.n = n;
    this.outEdges = {};
    this.inDegree = [];

    for (let i = 0; i < n; i++) {
      this.outEdges[i] = new Set();
      this.inDegree[i] = 0;
    }
  }

  public add([to, from]: Edge) {
    this.outEdges[from].add(to);
    this.inDegree[to]++;
  }

  public topologicalSort(): number[] {
    const sorted: number[] = [];

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
 * O(N + E) time
 * O(E) memory
 * cycle dependencies => []
 * @param n (1, 2000)
 * @param dependencies (1)
 */
const findOrder = (n: number, dependencies: Edge[]): number[] => {
  //   O(1) time
  //   O(E) memory
  const graph = new Graph(n);

  // O(E) time
  for (const dependency of dependencies) {
    graph.add(dependency);
  }

  //   O(N + E) time
  return graph.topologicalSort();
};

console.log(findOrder(2, [[1, 0]]));
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);
console.log(
  findOrder(4, [
    [1, 0],
    [2, 1],
    [3, 2],
    [0, 3],
  ])
);
console.log(
  findOrder(4, [
    [1, 0],
    [2, 1],
    [0, 2],
    [2, 3],
  ])
);
