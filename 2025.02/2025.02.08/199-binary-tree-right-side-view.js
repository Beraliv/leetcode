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
 * @return {number[]}
 */
var rightSideView = function (root) {
  // BFS + Queue
  // Time: O(N)
  // Space: O(N) space

  if (root === null) {
    return [];
  }

  const result = [];
  const queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const levelSize = queue.size();

    let lastVal;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.dequeue();
      lastVal = node.val;

      if (node.left !== null) {
        queue.enqueue(node.left);
      }

      if (node.right !== null) {
        queue.enqueue(node.right);
      }
    }

    result.push(lastVal);
  }

  return result;
};

//   5
// 3   7
//  4

// result = [5, 7, 4], queue = {}
// levelSize = 1, lastVal = 4, node = 4
// i = 1
