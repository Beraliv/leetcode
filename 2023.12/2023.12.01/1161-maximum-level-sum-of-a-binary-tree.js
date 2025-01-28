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
 * @return {number}
 */
var maxLevelSum = function (root) {
  // Solution 1. BFS, O(N) time, O(W) or O(N) space
  if (root === null) {
    return -1;
  }

  let maximumLevel = 0;
  let maximumSum = -Infinity;

  let currentSum = 0;
  let previousLevel = 1;
  const queue = new Queue();
  queue.enqueue({ node: root, level: 1 });

  while (!queue.isEmpty()) {
    const { node, level } = queue.dequeue();

    if (level !== previousLevel) {
      if (currentSum > maximumSum) {
        maximumSum = currentSum;
        maximumLevel = previousLevel;
      }

      currentSum = 0;
    }

    currentSum += node.val;

    if (node.left !== null) {
      queue.enqueue({ node: node.left, level: level + 1 });
    }

    if (node.right !== null) {
      queue.enqueue({ node: node.right, level: level + 1 });
    }

    previousLevel = level;
  }

  if (currentSum > maximumSum) {
    maximumSum = currentSum;
    maximumLevel = previousLevel;
  }

  return maximumLevel;
};
