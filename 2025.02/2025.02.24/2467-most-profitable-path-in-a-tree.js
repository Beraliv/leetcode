/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function (edges, bob, amount) {
  // Solution 1: 2 DFS + Array (visited) + HashMap (adjMap)
  // Time: O(N + E)
  // Space: O(N + E)

  //   const n = amount.length;

  //   if (n === 0) {
  //     return -1;
  //   }

  //   if (edges.length === 0) {
  //     return -1;
  //   }

  //   const adjMap = new Map();
  //   for (const [v1, v2] of edges) {
  //     if (!adjMap.has(v1)) {
  //       adjMap.set(v1, []);
  //     }
  //     if (!adjMap.has(v2)) {
  //       adjMap.set(v2, []);
  //     }

  //     adjMap.get(v1).push(v2);
  //     adjMap.get(v2).push(v1);
  //   }

  //   // 1. Find Bob path

  //   let visited = Array.from({ length: n }, () => false);

  //   let bobPath = new Map();
  //   const findPathBetween = (curr, time) => {
  //     bobPath.set(curr, time);
  //     visited[curr] = true;

  //     if (curr === 0) {
  //       return true;
  //     }

  //     for (const v1 of adjMap.get(curr)) {
  //       if (!visited[v1] && findPathBetween(v1, time + 1)) {
  //         return true;
  //       }
  //     }

  //     bobPath.delete(curr);
  //     return false;
  //   };

  //   findPathBetween(bob, 0);

  //   // 2. Find Alice path

  //   visited = Array.from({ length: amount.length }, () => false);
  //   let maxProfit = -Infinity;

  //   const findMaxProfit = (v0, time, profit) => {
  //     visited[v0] = true;

  //     if (!bobPath.has(v0) || time < bobPath.get(v0)) {
  //       profit += amount[v0];
  //     } else if (time === bobPath.get(v0)) {
  //       profit += amount[v0] / 2;
  //     }

  //     if (adjMap.get(v0).length === 1 && v0 !== 0) {
  //       maxProfit = Math.max(maxProfit, profit);
  //     }

  //     for (const v1 of adjMap.get(v0)) {
  //       if (!visited[v1]) {
  //         findMaxProfit(v1, time + 1, profit);
  //       }
  //     }
  //   };

  //   findMaxProfit(0, 0, 0);

  //   return maxProfit;

  // Solution 2: 1 DFS
  // Time: O(N + E)
  // Space: O(N + E)

  const n = amount.length;

  if (n === 0) {
    return -1;
  }

  if (edges.length === 0) {
    return -1;
  }

  const tree = {};
  for (const [v0, v1] of edges) {
    (tree[v0] = tree[v0] || []).push(v1);
    (tree[v1] = tree[v1] || []).push(v0);
  }

  const distanceFromBob = Array.from({ length: n }, () => n);

  const findPaths = (v0, parent, time) => {
    let maxIncome = 0,
      maxChild = -Infinity;

    if (v0 === bob) {
      distanceFromBob[v0] = 0;
    }

    for (const v1 of tree[v0]) {
      if (parent === v1) {
        continue;
      }

      maxChild = Math.max(maxChild, findPaths(v1, v0, time + 1));
      distanceFromBob[v0] = Math.min(
        distanceFromBob[v0],
        distanceFromBob[v1] + 1
      );
    }

    if (distanceFromBob[v0] > time) {
      maxIncome += amount[v0];
    } else if (distanceFromBob[v0] === time) {
      maxIncome += amount[v0] / 2;
    }

    if (maxChild === -Infinity) {
      return maxIncome;
    }
    return maxIncome + maxChild;
  };

  return findPaths(0, 0, 0, bob);
};

console.log(
  mostProfitablePath(
    [
      [0, 1],
      [1, 2],
      [1, 3],
      [3, 4],
    ],
    3,
    [-2, 4, 2, -4, 6]
  )
);
