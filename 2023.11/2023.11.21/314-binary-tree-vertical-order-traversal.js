/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function (root) {
  // BFS + Queue (left => right)
  // Time: O(N)
  // Space: O(N)

  if (root === null) {
    return [];
  }

  const colMap = new Map();
  let minCol = Infinity;
  const queue = new Queue();
  queue.enqueue({ node: root, col: 0 });

  while (!queue.isEmpty()) {
    const { node, col } = queue.dequeue();

    if (!colMap.has(col)) {
      colMap.set(col, []);
    }
    colMap.get(col).push(node.val);

    minCol = Math.min(minCol, col);

    // left to right (within a col), top row to bottom

    if (node.left !== null) {
      queue.enqueue({ node: node.left, col: col - 1 });
    }

    if (node.right !== null) {
      queue.enqueue({ node: node.right, col: col + 1 });
    }
  }

  const result = [];
  for (let i = minCol; i < minCol + colMap.size; i++) {
    result.push(colMap.get(i));
  }

  return result;
};

//    3
//  1   2
//   4 0

// levelMap = {0: [3, 4, 0], -1: [1], 1: [2]}, minLevel = -1, maxLevel = 1
// queue = []
// {node: 0, level: 0}
// result = [[1], [3, 4, 0], [2]]
//
