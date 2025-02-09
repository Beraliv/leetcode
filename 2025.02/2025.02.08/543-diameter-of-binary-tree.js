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
var diameterOfBinaryTree = function (root) {
  // Solution 1. DFS + intermediate calculation
  // Time: O(N)
  // Space: O(N) for all trees and O(logN) for balanced trees

  if (root === null) {
    return 0;
  }

  let diameter = 0;

  const dfs = (node) => {
    if (node === null) {
      return 0;
    }

    const leftPath = node.left !== null ? dfs(node.left) + 1 : 0;
    const rightPath = node.right !== null ? dfs(node.right) + 1 : 0;

    diameter = Math.max(diameter, leftPath + rightPath);

    return Math.max(leftPath, rightPath);
  };

  dfs(root);

  return diameter;
};
