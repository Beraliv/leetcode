const copyArray = (from, to) => {
  for (let i = 0; i < from.length; i++) {
    from[i] = to[i];
  }
};

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  // bellmand-ford, O(K * (N + E)) time, O(N) space
  const prev = Array(n).fill(Infinity);
  prev[src] = 0;
  const curr = Array(n).fill(Infinity);
  curr[src] = 0;

  for (let i = 0; i <= k; i++) {
    for (const [from, to, price] of flights) {
      curr[to] = Math.min(curr[to], prev[from] + price);
    }

    copyArray(prev, curr);
  }

  return curr[dst] === Infinity ? -1 : curr[dst];

  //   beats 99% time solutions (without destructuring assignment)
  // bellmand-ford, O(K * (N + E)) time, O(N) space
  //   const prev = Array(n).fill(Infinity);
  //   prev[src] = 0;
  //   const curr = Array(n).fill(Infinity);
  //   curr[src] = 0;

  //   for (let i = 0; i <= k; i++) {
  //     //   [from, to, price]
  //     for (const flight of flights) {
  //       curr[flight[1]] = Math.min(curr[flight[1]], prev[flight[0]] + flight[2]);
  //     }

  //     copyArray(prev, curr);
  //   }

  //   return curr[dst] === Infinity ? -1 : curr[dst];
};

// n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]]
// src = 0, dst = 3, k = 1
// n = 4
// revAdj = [
// [[2, 100]],
// [[0, 100]],
// [[1, 100]],
// [[1, 600], [2, 200]]
// ]
// prev = [0, 100, Infinity, Infinity]
// curr = [0, 100, 200, 700]
// i = 1
// to = 3
// from = 1, price = 600
