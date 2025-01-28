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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false;
  }

  const dfs = (node, restOfSum) => {
    if (node.left === null && node.right === null && restOfSum === node.val) {
      return true;
    }

    const nextRestOfSum = restOfSum - node.val;
    const left = node.left !== null && dfs(node.left, nextRestOfSum);
    const right = node.right !== null && dfs(node.right, nextRestOfSum);

    return left || right;
  };

  return dfs(root, targetSum);
};
