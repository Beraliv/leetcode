/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let nodesFound = false;

  // LCA - left has p and right has q or vice verca
  const dfs = (node) => {
    if (node === null) {
      return node;
    }

    let conditions = 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    if (node === p || node === q) {
      conditions++;
    }
    if (left !== null) {
      conditions++;
    }
    if (right !== null) {
      conditions++;
    }

    if (conditions === 2) {
      nodesFound = true;
    }

    if ((left !== null && right !== null) || node === p || node === q) {
      return node;
    } else if (left !== null) {
      return left;
    }

    return right;
  };

  const lca = dfs(root);

  if (nodesFound) {
    return lca;
  }

  return null;
};
