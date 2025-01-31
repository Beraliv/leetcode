/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const colours = new Map();

  const dfs = (v1, colour) => {
    // console.log(`>>> visited ${v1} (c = ${colour})`);
    colours.set(v1, colour);

    for (const v2 of graph[v1]) {
      if (colours.get(v2) === colour) {
        return false;
      }
      if (!colours.has(v2)) {
        if (!dfs(v2, -colour)) {
          return false;
        }
      }
    }
    return true;
  };

  for (let v = 0; v < graph.length; v++) {
    if (!colours.has(v)) {
      if (!dfs(v, 1)) {
        return false;
      }
    }
  }

  return true;
};

// console.log(
//   isBipartite([
//     [1, 2, 3],
//     [0, 2],
//     [0, 1, 3],
//     [0, 2],
//   ])
// );
// console.log(
//   isBipartite([
//     [1, 3],
//     [0, 2],
//     [1, 3],
//     [0, 2],
//   ])
// );
