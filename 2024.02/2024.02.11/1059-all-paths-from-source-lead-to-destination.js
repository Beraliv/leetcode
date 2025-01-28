/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function (n, edges, source, destination) {
  // O(V + E) time, O(V + E) space
  const adjMap = new Map();
  for (let v = 0; v < n; v++) {
    adjMap.set(v, []);
  }

  for (const [from, to] of edges) {
    adjMap.get(from).push(to);
  }

  const states = new Array(n).fill(0);

  const dfs = (node) => {
    // no loop
    if (states[node] > 0) {
      return states[node] === 2;
    }

    const list = adjMap.get(node);

    if (list.length === 0) {
      return node === destination;
    }

    states[node] = 1;

    for (const neighbour of list) {
      if (!dfs(neighbour)) {
        return false;
      }
    }

    states[node] = 2;

    return true;
  };

  return dfs(source);
};
