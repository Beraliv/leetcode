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
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const levels = [];

  const queue = new Queue([{ node: root, level: 0 }]);

  while (!queue.isEmpty()) {
    const { node, level } = queue.dequeue();

    levels[level] = levels[level] || [];
    levels[level].push(node.val);

    if (node.left !== null) {
      queue.enqueue({ node: node.left, level: level + 1 });
    }

    if (node.right !== null) {
      queue.enqueue({ node: node.right, level: level + 1 });
    }
  }

  return levels;
};
