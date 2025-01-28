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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (root === null) {
    return false;
  }

  if (isIdentical(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isIdentical = (node1, node2) => {
  if (node1 === null || node2 === null) {
    return node1 === null && node2 === null;
  }

  return (
    node1.val === node2.val &&
    isIdentical(node1.left, node2.left) &&
    isIdentical(node1.right, node2.right)
  );
};
