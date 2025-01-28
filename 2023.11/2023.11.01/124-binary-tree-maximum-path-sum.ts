class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// O(N) space, O(N) time
function maxPathSum(root: TreeNode | null): number {
  let maxPathSum = -Infinity;

  function findMaxPathSum(node: TreeNode | null): number {
    if (node === null) {
      return -Infinity;
    }

    const leftMaxPathSum = Math.max(findMaxPathSum(node.left), 0);
    const rightMaxPathSum = Math.max(findMaxPathSum(node.right), 0);

    maxPathSum = Math.max(
      maxPathSum,
      leftMaxPathSum + node.val + rightMaxPathSum
    );

    return Math.max(leftMaxPathSum + node.val, node.val + rightMaxPathSum);
  }

  findMaxPathSum(root);

  return maxPathSum;
}
