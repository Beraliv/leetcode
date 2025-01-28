export {};

// [wrt, wrf, er]
// []

// w => r => t
// w (=> e) => r (=> t) => f
// e => r

class GraphNode {
  public ch: string;
  public neighbours: Set<GraphNode>;

  constructor(ch: string, neighbours: Set<GraphNode> = new Set()) {
    this.ch = ch;
    this.neighbours = neighbours;
  }
}

const debugGraphNode = (node: GraphNode): string => {
  return `${node.ch} => {${[...node.neighbours.values()]
    .map((node) => node.ch)
    .join(", ")}}`;
};

class LinkedNode<T> {
  public value: T;
  public next: LinkedNode<T> | null;

  constructor(value: T, next: LinkedNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

class MyQueue<T> {
  public first: LinkedNode<T> | null = null;
  public last: LinkedNode<T> | null = null;

  push(value: T) {
    const node = new LinkedNode(value);
    if (this.last === null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
  }

  delete(): T | null {
    if (this.first === null) {
      return null;
    }
    const first = this.first;
    if (this.first.next === null) {
      this.last = null;
    }
    this.first = this.first.next;
    return first.value;
  }

  isEmpty(): boolean {
    return this.first === null;
  }

  has(value: T) {
    let node = this.first;
    while (node !== null) {
      if (node.value === value) {
        return true;
      }

      node = node.next;
    }

    return false;
  }
}

function isLexicographical(word1: string, word2: string) {
  const length = Math.min(word1.length, word2.length);

  for (let i = 0; i < length; i++) {
    if (word1[i] !== word2[i]) {
      return true;
    }
  }

  return word1.length <= word2.length;
}

// ["wrt","wrf","er","ett","rftt"]
// graph = {t: [f], w: [e], r: [t], e: [r]}
// previousWord = ett
// word = rftt
// index = 1
// previousCh = e, ch = r

function createGraph(words: string[]): [Map<string, GraphNode>, boolean] {
  const graph = new Map<string, GraphNode>();

  let previousWord = words[0];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (!isLexicographical(previousWord, word)) {
      return [graph, false];
    }

    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      const node = graph.get(ch) ?? new GraphNode(ch);
      graph.set(ch, node);
    }

    let index = 0;
    while (
      index < Math.min(previousWord.length, word.length) &&
      previousWord[index] === word[index]
    ) {
      index++;
    }

    if (index < Math.min(previousWord.length, word.length)) {
      const previousCh = previousWord[index];
      const ch = word[index];

      const previousNode = graph.get(previousCh) ?? new GraphNode(previousCh);
      const node = graph.get(ch) ?? new GraphNode(ch);

      previousNode.neighbours.add(node);
      graph.set(previousCh, previousNode);
    }

    previousWord = word;
  }

  return [graph, true];
}

function findCycle(map: Map<string, GraphNode>): boolean {
  for (const startNode of map.values()) {
    const visited = new Set<GraphNode>();
    const queue = new MyQueue<GraphNode>();
    queue.push(startNode);

    while (!queue.isEmpty()) {
      const node = queue.delete()!;

      if (visited.has(node)) {
        console.log(
          `node ${node.ch} is iterated over twice for one strongly connected graph`
        );
        return true;
      }

      visited.add(node);

      for (const neighbour of node.neighbours) {
        if (!queue.has(neighbour)) {
          queue.push(neighbour);
        }
      }
    }

    console.log(`No cycles for start node ${startNode.ch} found`);
  }

  return false;
}
function topologicalSort(map: Map<string, GraphNode>): string {
  // 1. in-degree for each node
  const inDegree = new Map<string, number>();
  for (const node of map.values()) {
    inDegree.set(node.ch, 0);
  }
  for (const node of map.values()) {
    for (const neighbour of node.neighbours) {
      inDegree.set(neighbour.ch, inDegree.get(neighbour.ch)! + 1);
    }
  }

  let result: string[] = [];
  const queue = new MyQueue<GraphNode>();
  for (const node of map.values()) {
    if (inDegree.get(node.ch) === 0) {
      queue.push(node);
    }
  }
  // 2. stack with iteration over nodes with 0 degrees
  while (!queue.isEmpty()) {
    const node = queue.delete()!;
    // 2.1. Update result
    result.push(node.ch);

    for (const neighbour of node.neighbours) {
      // 2.2. decrease in-degree for all neighbours
      const updatedInDegree = inDegree.get(neighbour.ch)! - 1;
      inDegree.set(neighbour.ch, updatedInDegree);
      if (updatedInDegree === 0) {
        queue.push(neighbour);
      }
    }
  }
  return result.join("");
}

function alienOrder(words: string[]): string {
  if (words.length === 0) {
    return "";
  }

  // 1. create a Graph
  // 2. iterate over words
  const [graph, isCorrectGraph] = createGraph(words);

  console.log([...graph.values()].map(debugGraphNode));

  if (!isCorrectGraph) {
    return "";
  }

  // 3. check that graph is acyclic
  if (findCycle(graph)) {
    return "";
  }

  // 4. topological sort to find the order
  return topologicalSort(graph);
}

console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]));
console.log(alienOrder(["abc", "ab"]));
console.log(alienOrder(["z", "z"]));
