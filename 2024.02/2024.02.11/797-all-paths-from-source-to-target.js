/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const n = graph.length;
  const answer = [];

  const backtrack = (node, path) => {
    if (node === n - 1) {
      answer.push([...path]);
    }

    for (const neighbour of graph[node]) {
      path.push(neighbour);
      backtrack(neighbour, path);
      path.pop();
    }
  };

  backtrack(0, [0]);

  return answer;
};
