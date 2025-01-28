/**
 * @param {number[][]} edges
 * @return {number}
 */
var treeDiameter = function (edges) {
  const graph = new Map();
  for (let v = 0; v <= edges.length; v++) {
    graph.set(v, []);
  }

  for (const [v1, v2] of edges) {
    graph.get(v1).push(v2);
    graph.get(v2).push(v1);
  }

  const [farV] = bfs(0, graph);
  const [_, dist] = bfs(farV, graph);
  return dist;
};

const bfs = (v0, graph) => {
  const visited = Array(graph.size).fill(false);
  visited[v0] = true;

  let queue = new Queue();
  queue.enqueue(v0);

  let lastNode = v0,
    distance = -1;

  while (!queue.isEmpty()) {
    const nextQueue = new Queue();

    while (!queue.isEmpty()) {
      const v = queue.dequeue();
      for (const neighbour of graph.get(v)) {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          nextQueue.enqueue(neighbour);
          lastNode = neighbour;
        }
      }
    }

    distance++;
    queue = nextQueue;
  }

  return [lastNode, distance];
};
