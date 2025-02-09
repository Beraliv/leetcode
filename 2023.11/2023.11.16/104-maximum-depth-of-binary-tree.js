/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  // Solution 1: DFS
  // Time: O(N)
  // Space: O(N) for all trees and O(logN) for balanced trees

  // if (root === null) {
  //   return 0;
  // }

  // if (root.left === null && root.right === null) {
  //   return 1;
  // }

  // return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

  // Solution 2: Iterative DFS with stack
  // Time: O(N)
  // Space: O(N) for all trees and O(logN) for balanced trees

  if (root === null) {
    return 0;
  }

  const stack = [{ node: root, depth: 1 }];
  let maxDepth = 0;

  while (stack.length) {
    const { node, depth } = stack.pop();

    if (node.left === null && node.right === null) {
      // leaf
      maxDepth = Math.max(maxDepth, depth);
    }

    if (node.left !== null) {
      stack.push({ node: node.left, depth: depth + 1 });
    }

    if (node.right !== null) {
      stack.push({ node: node.right, depth: depth + 1 });
    }
  }

  return maxDepth;
};
