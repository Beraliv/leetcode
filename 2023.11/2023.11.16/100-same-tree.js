import { Queue } from "@datastructures-js/queue";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (pHead, qHead) {
  // Solution 1. DFS
  // Time: O(P + Q)
  // Space: O(P + Q) for all tress and O(log(P + Q)) for balanced trees

  // if (p === null || q === null) {
  //   return p === null && q === null;
  // }

  // return (
  //   p.val === q.val &&
  //   isSameTree(p.left, q.left) &&
  //   isSameTree(p.right, q.right)
  // );

  // Solution 2. BFS + Queue + Early exit
  // Time: O(P + Q)
  // Space: O(P + Q) for all tress and O(log(P + Q)) for balanced trees

  const queue = new Queue();
  queue.enqueue({ p: pHead, q: qHead });
  while (!queue.isEmpty()) {
    const { p, q } = queue.dequeue();

    if (p === null || q === null) {
      if (p === null && q === null) {
        continue;
      }

      return false;
    }

    if (p.val !== q.val) {
      return false;
    }

    queue.enqueue({ p: p.left, q: q.left });
    queue.enqueue({ p: p.right, q: q.right });
  }

  return true;
};
