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
  if (root === null) {
    return null;
  }

  while (root !== null) {
    const val = root.val;
    const pVal = p.val;
    const qVal = q.val;

    if (pVal > val && qVal > val && root.right !== null) {
      root = root.right;
      continue;
    }

    if (pVal < val && qVal < val && root.left !== null) {
      root = root.left;
      continue;
    }

    return root;
  }
};
