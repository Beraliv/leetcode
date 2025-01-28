export {};

class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

// function cloneGraph(node: Node | null): Node | null {
//     let visited = new Map<Node, Node>();

// 	const dfs = (node: Node | null): Node | null => {
//         if (!node) {
//             return null;
//         }

//         if (visited.has(node)) {
//             return visited.get(node);
//         }

//         let newNode = new Node(node.val);
//         visited.set(node, newNode);

//         for (let i = 0; i < node.neighbors.length; i++) {
//             newNode.neighbors.push(dfs(node.neighbors[i]));
//         }

//         return newNode;
//     }

//     return dfs(node)
// };

class MyListNode<V> {
  public val: V;
  public next: MyListNode<V> | null;

  constructor(val: V, next: MyListNode<V> | null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList<V> {
  private root: MyListNode<V> | null = null;

  append(value: V): void {
    const newRoot = new MyListNode<V>(value, this.root);
    this.root = newRoot;
  }

  remove(): V | null {
    if (this.root === null) {
      return null;
    }

    const root = this.root;
    this.root = root.next;
    return root.val;
  }
}

function cloneGraph(start: Node | null): Node | null {
  if (!start) {
    return start;
  }

  let visited = new Map<Node, Node>();

  const queue = new LinkedList<Node>();
  queue.append(start);
  visited.set(start, new Node(start.val));

  while (true) {
    const node = queue.remove();

    if (!node) {
      break;
    }

    for (let i = 0; i < node.neighbors.length; i++) {
      const neighbor = node.neighbors[i];
      if (!visited.has(neighbor)) {
        visited.set(neighbor, new Node(neighbor.val));
        queue.append(neighbor);
      }
      visited.get(node)!.neighbors.push(visited.get(neighbor)!);
    }
  }

  return visited.get(start)!;
}
