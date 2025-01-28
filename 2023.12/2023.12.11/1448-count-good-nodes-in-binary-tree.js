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
var goodNodes = function (root) {
  let count = 0;

  if (root === null) {
    return count;
  }

  const queue = new Queue();
  queue.enqueue({ node: root, max: -Infinity });

  while (!queue.isEmpty()) {
    const { node, max } = queue.dequeue();

    if (node.val >= max) {
      count++;
    }

    const nextMax = Math.max(max, node.val);

    if (node.left !== null) {
      queue.enqueue({ node: node.left, max: nextMax });
    }

    if (node.right !== null) {
      queue.enqueue({ node: node.right, max: nextMax });
    }
  }

  return count;
};
