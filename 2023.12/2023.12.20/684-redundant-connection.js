/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  // Solution 1. Strongly connected components
  //   const scc = new Map();
  //   const rscc = new Map();
  //   let count = 1;
  //   for (const [v1, v2] of edges) {
  //     if (!scc.has(v1) && !scc.has(v2)) {
  //       scc.set(v1, count);
  //       scc.set(v2, count);
  //       rscc.set(count, [v1, v2]);
  //       count++;
  //     } else if (scc.has(v1) && !scc.has(v2)) {
  //       const c1 = scc.get(v1);
  //       scc.set(v2, c1);
  //       const r1 = rscc.get(c1);
  //       r1.push(v2);
  //       rscc.set(c1, r1);
  //     } else if (!scc.has(v1) && scc.has(v2)) {
  //       const c2 = scc.get(v2);
  //       scc.set(v1, c2);
  //       const r2 = rscc.get(c2);
  //       r2.push(v1);
  //       rscc.set(c2, r2);
  //     } else {
  //       const c1 = scc.get(v1);
  //       const c2 = scc.get(v2);
  //       if (c1 !== c2) {
  //         // merge two strongly connected components
  //         // in particular, c1 into c2
  //         const r1 = rscc.get(c1);
  //         const r2 = rscc.get(c2);
  //         for (const v of r1) {
  //           scc.set(v, c2);
  //           r2.push(v);
  //         }
  //         rscc.delete(c1);
  //       } else {
  //         // loop is created, so this edge has to be removed
  //         return [v1, v2];
  //       }
  //     }
  //   }
  //   return null;
  //   Solution 2. Union-Find
  const n = edges.length;
  const parents = Array(n + 1)
    .fill(1)
    .map((_, index) => index);
  const rank = Array(n + 1).fill(1);

  const find = (v) => {
    let p = parents[v];

    while (parents[p] !== p) {
      parents[p] = parents[parents[p]];
      p = parents[p];
    }

    return p;
  };

  const union = (v1, v2) => {
    const p1 = find(v1);
    const p2 = find(v2);

    if (p1 === p2) {
      return false;
    }

    if (rank[p1] > rank[p2]) {
      parents[p2] = p1;
      rank[p1] += rank[p2];
    } else {
      parents[p1] = p2;
      rank[p2] += rank[p1];
    }
    return true;
  };

  for (const [v1, v2] of edges) {
    if (!union(v1, v2)) {
      return [v1, v2];
    }
  }

  return null;
};
