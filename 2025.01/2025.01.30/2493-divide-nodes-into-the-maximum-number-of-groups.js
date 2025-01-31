import { Queue } from "@datastructures-js/queue";

// Union-Find efficiently groups connected components in O(α(N)) time (inverse
// Ackermann function, almost constant).
class UnionFind {
  constructor(n) {
    this.root = Array(n);
    this.rank = Array(n);
    for (var i = 1; i <= n; i++) {
      this.root[i] = i;
      this.rank[i] = 1;
    }
  }
  find(x) {
    if (this.root[x] === x) {
      return x;
    }
    return (this.root[x] = this.find(this.root[x]));
  }
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) {
      return;
    }

    if (this.rank[rootX] > this.rank[rootY]) {
      this.root[rootY] = rootX;
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.root[rootX] = rootY;
    } else {
      this.root[rootY] = rootX;
      this.rank[rootX]++;
    }
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const magnificentSets = function (n, edges) {
  // time: O(N + E)
  // space: O(N + E)

  if (n === 0) {
    return 0;
  }

  const unionFind = new UnionFind(n + 1);
  const graph = new Map();
  for (let v = 1; v <= n; v++) {
    graph.set(v, []);
  }

  for (const [v1, v2] of edges) {
    graph.get(v1).push(v2);
    graph.get(v2).push(v1);
    unionFind.union(v1, v2);
  }

  const groups = new Map();
  for (let i = 1; i <= n; i++) {
    const parent = unionFind.find(i);
    if (!groups.has(parent)) {
      groups.set(parent, []);
    }
    groups.get(parent).push(i);
  }

  let totalGroups = 0;
  for (const group of groups.values()) {
    let maxGroups = 0;
    for (const v0 of group) {
      const numGroups = bfs(graph, n, v0);
      if (numGroups === -1) {
        return -1;
      }
      maxGroups = Math.max(maxGroups, numGroups);
    }
    totalGroups += maxGroups;
  }

  return totalGroups;
};

const bfs = (graph, n, v0) => {
  const distances = Array(n + 1).fill(-1);
  distances[v0] = 0;

  const queue = new Queue();
  queue.enqueue(v0);

  let distance = 0;

  while (!queue.isEmpty()) {
    const level = queue.size();

    for (let i = 0; i < level; i++) {
      const v1 = queue.dequeue();
      for (const v2 of graph.get(v1)) {
        if (distances[v2] === -1) {
          distances[v2] = distance + 1;
          queue.enqueue(v2);
        } else if (distances[v2] === distance) {
          return -1;
        }
      }
    }

    distance++;
  }

  return distance;
};

// Req. 1. Each node in the graph belongs to exactly one group.
// Req. 2. For every pair of nodes in the graph that are connected by an edge
// [ai, bi], if ai belongs to the group with index x, and bi belongs to the
// group with index y, then |y - x| = 1.

// console.log(
//   "solution 1: ",
//   magnificentSets(6, [
//     [1, 2],
//     [1, 4],
//     [1, 5],
//     [2, 6],
//     [2, 3],
//     [4, 6],
//   ])
// );
// console.log(
//   "solution 2: ",
//   magnificentSets(3, [
//     [1, 2],
//     [2, 3],
//     [3, 1],
//   ])
// );
// console.log(
//   "solution 3: ",
//   magnificentSets(7, [
//     [1, 2],
//     [2, 3],
//     [4, 5],
//     [5, 6],
//     [6, 7],
//     [7, 4],
//   ])
// );
// console.log(
//   "solution 4: ",
//   magnificentSets(92, [
//     [67, 29],
//     [13, 29],
//     [77, 29],
//     [36, 29],
//     [82, 29],
//     [54, 29],
//     [57, 29],
//     [53, 29],
//     [68, 29],
//     [26, 29],
//     [21, 29],
//     [46, 29],
//     [41, 29],
//     [45, 29],
//     [56, 29],
//     [88, 29],
//     [2, 29],
//     [7, 29],
//     [5, 29],
//     [16, 29],
//     [37, 29],
//     [50, 29],
//     [79, 29],
//     [91, 29],
//     [48, 29],
//     [87, 29],
//     [25, 29],
//     [80, 29],
//     [71, 29],
//     [9, 29],
//     [78, 29],
//     [33, 29],
//     [4, 29],
//     [44, 29],
//     [72, 29],
//     [65, 29],
//     [61, 29],
//   ])
// );
