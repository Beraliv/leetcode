class GraphNode {
  public ch: string;
  public neighbours: Set<GraphNode>;

  constructor(ch: string, neighbours: Set<GraphNode> = new Set()) {
    this.ch = ch;
    this.neighbours = neighbours;
  }
}

const topologicalSort = (graph: Map<string, GraphNode>): string => {
  // 1. incoming degrees
  const incomingDegrees = new Map<string, number>();
  for (const node of graph.values()) {
    incomingDegrees.set(node.ch, 0);
  }
  for (const node of graph.values()) {
    for (const neighbour of node.neighbours) {
      incomingDegrees.set(
        neighbour.ch,
        (incomingDegrees.get(neighbour.ch) || 0) + 1
      );
    }
  }

  const result: string[] = [];
  const queue: GraphNode[] = [];

  // 2.1 Find nodes with 0 incoming degree
  for (const node of graph.values()) {
    if (incomingDegrees.get(node.ch) === 0) {
      queue.push(node);
    }
  }

  while (queue.length > 0) {
    const node = queue.shift()!;
    result.push(node.ch);

    for (const neighbour of node.neighbours) {
      const updatedIncomingDegree =
        (incomingDegrees.get(neighbour.ch) || 0) - 1;
      incomingDegrees.set(neighbour.ch, updatedIncomingDegree);
      if (updatedIncomingDegree === 0) {
        queue.push(neighbour);
      }
    }
  }

  return result.join("");
};

const graph = (() => {
  const one = new GraphNode("1");
  const two = new GraphNode("2");
  const three = new GraphNode("3");
  const four = new GraphNode("4");
  const five = new GraphNode("5");

  // 1 => 2,3
  one.neighbours.add(two);
  one.neighbours.add(three);
  // 2 => 4,5
  two.neighbours.add(four);
  two.neighbours.add(five);
  // 3 => 4
  three.neighbours.add(four);
  // 4 => 5
  four.neighbours.add(five);

  const map = new Map<string, GraphNode>();
  map.set(one.ch, one);
  map.set(two.ch, two);
  map.set(three.ch, three);
  map.set(four.ch, four);
  map.set(five.ch, five);

  return map;
})();

console.log(topologicalSort(graph));
