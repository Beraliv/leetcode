// Solution 1
// const addParent = (node, parent) => {
//   node.parent = parent;

//   if (node.left !== null) {
//     addParent(node.left, node);
//   }

//   if (node.right !== null) {
//     addParent(node.right, node);
//   }
// };

// Solution 2.
const addEdge = (graph, from, to) => {
  const tos = graph.get(from) || new Set();
  tos.add(to);
  graph.set(from, tos);
};

const buildGraph = (node, parent, graph) => {
  if (parent !== null) {
    addEdge(graph, node.val, parent.val);
    addEdge(graph, parent.val, node.val);
  }

  if (node.left !== null) {
    buildGraph(node.left, node, graph);
  }

  if (node.right !== null) {
    buildGraph(node.right, node, graph);
  }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  // Solution 1. Tree mutation
  //   const answer = [];
  //   if (root === null) {
  //     return answer;
  //   }
  //   // 1. add parents, O(N) time and O(N) extra space
  //   addParent(root, null);
  //   const visited = new Set();
  //   // 2. find nodes, O(N) time and O(N) extra space
  //   const backtrack = (node, left) => {
  //     if (left === 0) {
  //       answer.push(node.val);
  //       return;
  //     }
  //     visited.add(node);
  //     if (node.parent !== null && !visited.has(node.parent)) {
  //       backtrack(node.parent, left - 1);
  //     }
  //     if (node.left !== null && !visited.has(node.left)) {
  //       backtrack(node.left, left - 1);
  //     }
  //     if (node.right !== null && !visited.has(node.right)) {
  //       backtrack(node.right, left - 1);
  //     }
  //     visited.delete(node);
  //   };
  //   backtrack(target, k);
  //   return answer;
  // Solution 2. Create separate Graph
  const answer = [];

  if (root === null) {
    return answer;
  }

  const graph = new Map();

  // 1. add parents, O(N) time and O(N) extra space
  buildGraph(root, null, graph);

  const visited = new Set();

  // 2. find nodes, O(N) time and O(N) extra space
  const backtrack = (val, left) => {
    if (left === 0) {
      answer.push(val);
      return;
    }

    visited.add(val);

    const neighbours = graph.get(val) || new Set();

    for (const neighbour of neighbours) {
      if (!visited.has(neighbour)) {
        backtrack(neighbour, left - 1);
      }
    }

    visited.delete(val);
  };

  backtrack(target.val, k);

  return answer;
};
