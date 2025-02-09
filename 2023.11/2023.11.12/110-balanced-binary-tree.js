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
 * @return {boolean}
 */
var isBalanced = function (root) {
  // DFS with collecting information
  // Time: O(N)
  // Space: O(N) for all trees and O(logN) for balanced trees

  const dfs = (node, depth) => {
    if (node === null) {
      return { depth: depth - 1, balanced: true };
    }

    let leftInfo = dfs(node.left, depth + 1);
    if (!leftInfo.balanced) {
      return { depth, balanced: false };
    }

    const rightInfo = dfs(node.right, depth + 1);
    if (!rightInfo.balanced) {
      return { depth, balanced: false };
    }

    return {
      depth: Math.max(leftInfo.depth, depth, rightInfo.depth),
      balanced: Math.abs(leftInfo.depth - rightInfo.depth) <= 1,
    };
  };

  return dfs(root, 0).balanced;
};
