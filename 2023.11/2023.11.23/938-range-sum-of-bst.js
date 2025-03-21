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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  // Solution: DFS + Optimisation for BST
  // Time: O(N)
  // Space: O(N) for unbalanced and O(logN) for balanced

  let sum = 0;

  const dfs = (node) => {
    if (node === null) {
      return;
    }

    if (low < node.val) {
      dfs(node.left);
    }

    if (low <= node.val && node.val <= high) {
      sum += node.val;
    }

    if (node.val < high) {
      dfs(node.right);
    }
  };

  dfs(root);

  return sum;
};
