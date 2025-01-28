/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const adjacent = new Map();
  for (const [from, to, price] of flights) {
    const neighbours = adjacent.get(from) || [];
    neighbours.push([to, price]);
    adjacent.set(from, neighbours);
  }

  const stops = new Array(n).fill(Infinity);
  const minQueue = new MinPriorityQueue({ priority: (entry) => entry.dist });

  minQueue.enqueue({ dist: 0, pos: src, steps: 0 });

  while (!minQueue.isEmpty()) {
    const { dist, pos, steps } = minQueue.dequeue().element;

    if (steps > stops[pos] || steps > k + 1) continue;

    stops[pos] = steps;

    if (pos === dst) {
      return dist;
    }

    if (!adjacent.has(pos)) continue;

    for (const [to, price] of adjacent.get(pos)) {
      minQueue.enqueue({ dist: dist + price, pos: to, steps: steps + 1 });
    }
  }

  return -1;
};
