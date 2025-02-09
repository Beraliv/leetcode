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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // Solution 1. DFS: in-order traversal
  // Time: O(N)
  // Space: O(N)
  //   if (root === null) {
  //     return -1;
  //   }
  //   let count = 0;
  //   let kthSmallest;
  //   const dfs = (node) => {
  //     if (node.left !== null) {
  //       dfs(node.left);
  //     }
  //     count++;
  //     if (count === k) {
  //       kthSmallest = node.val;
  //     }
  //     if (node.right !== null) {
  //       dfs(node.right);
  //     }
  //   };
  //   dfs(root);
  //   return kthSmallest;

  // Solution 2. Iterative DFS + Stack
  // Time: O(H + K) - O(N + K) for skewed tree and O(logN + K) for balanced tree
  // Space: O(H) - O(N) for skewed tree and O(logN) for balanced tree

  const stack = [];

  while (true) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (--k === 0) {
      return root.val;
    }
    root = root.right;
  }

  // Follow-up question: What if the BST is modified (insert/delete operations)
  // often and you need to find the kth smallest frequently? How would you
  // optimize the kthSmallest routine?

  // Answer 1: LRU cache
  // Insert/delete: will update LRU cache (i.e. doubly-linked list) - O(H) time
  // Search: will take O(K) time

  // TODO: Answer 2 - B+ tree?
};

//    3
// 1     4
//  2

// k = 1
// count = 4, kthSmallest = 1
//  node = 3
//      node = 1
//          node = 2
//      node = 4
