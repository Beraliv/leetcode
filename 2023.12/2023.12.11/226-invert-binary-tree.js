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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // Solution 1. DFS
  // Time: O(N)
  // Space: O(N) for all trees and O(logN) for balanced trees
  if (root === null) {
    return null;
  }

  const invertDfs = (node) => {
    const leftNode = node.left;
    node.left = node.right;
    node.right = leftNode;

    if (node.left !== null) {
      invertDfs(node.left);
    }

    if (node.right !== null) {
      invertDfs(node.right);
    }
  };

  invertDfs(root);

  return root;
};
