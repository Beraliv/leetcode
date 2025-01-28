/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  // Hierholzer's Algorithm
  // V - number of airports, E - number of flights
  // O(E * log(E / V)) time, O(V + E) space
  const map = new Map();

  for (const [from, to] of tickets) {
    const list = map.get(from) || [];
    list.push(to);
    map.set(from, list);
  }

  for (const values of map.values()) {
    values.sort((a, b) => b.localeCompare(a));
  }

  const order = [];

  const dfs = (node) => {
    if (map.has(node)) {
      const list = map.get(node);

      while (list.length > 0) {
        const dest = list.pop();
        dfs(dest);
      }
    }

    order.push(node);
  };

  dfs("JFK");

  return order.reverse();
};
