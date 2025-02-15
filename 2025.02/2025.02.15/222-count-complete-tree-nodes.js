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
var countNodes = function (root) {
  if (root === null) {
    return 0;
  }

  let count = 0;

  const dfs = (node) => {
    count++;

    if (node.left !== null) {
      dfs(node.left);
    }

    if (node.right !== null) {
      dfs(node.right);
    }
  };

  dfs(root);

  return count;
};
