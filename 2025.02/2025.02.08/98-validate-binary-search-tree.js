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
var isValidBST = function (root) {
  // Valid BST has L < N < R
  // Equality?

  // Solution 1. BFS (node, minValue, maxValue) + Early exit
  // Time: O(N)
  // Space: O(N)

  if (root === null) {
    return true;
  }

  const queue = new Queue();
  queue.enqueue({ node: root, minValue: -Infinity, maxValue: Infinity });

  while (!queue.isEmpty()) {
    const { node, minValue, maxValue } = queue.dequeue();

    // !(minValue < node.val && node.val < maxValue)

    if (minValue >= node.val || node.val >= maxValue) {
      return false;
    }

    if (node.left !== null) {
      queue.enqueue({ node: node.left, minValue, maxValue: node.val });
    }

    if (node.right !== null) {
      queue.enqueue({ node: node.right, minValue: node.val, maxValue });
    }
  }

  return true;
};

//   3
// 1   5
//    4

// queue = []
// {node: 4, minValue: 3, maxValue: 5}

//  2
// 1 3

// queue = []
// {node: 3, minValue: 2, maxValue: +Inf}
// return true
