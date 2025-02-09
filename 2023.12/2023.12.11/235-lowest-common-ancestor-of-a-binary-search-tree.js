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
  // Solution 1. Binary search
  // Time: O(log N)
  // Space: O(1)

  if (root === null || p === null || q === null) {
    return null;
  }

  let min = Math.min(p.val, q.val);
  let max = Math.max(p.val, q.val);
  let curr = root;

  while (curr !== null) {
    if (curr.val < min) {
      curr = curr.right;
    } else if (curr.val > max) {
      curr = curr.left;
    } else {
      return curr;
    }
  }

  return null;
};
