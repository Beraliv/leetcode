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
var maxPathSum = function (root) {
  // Solution: DFS, post-order traversal + calculation of maximumPath
  // Time: O(N)
  // Space: O(N)

  if (root === null) {
    return null;
  }

  let maximumPath = -Infinity;

  const dfs = (node) => {
    if (node === null) {
      return 0;
    }

    const left = Math.max(dfs(node.left), 0);
    const right = Math.max(dfs(node.right), 0);

    maximumPath = Math.max(maximumPath, left + node.val + right);

    return Math.max(left + node.val, node.val + right);
  };

  dfs(root);

  return maximumPath;
};

//   -10
// 9      20
//      15  7

// root = -10, maximumPath = 42
// node = -10, left = 9, right = 35
// node = 9, left = 0, right = 0
// node = null
// node = null
// node = 20, left = 15, right = 7
// node = 15, left = 0, right = 0
// node = null
// node = null
// node = 7, left = 0, right = 0
// node = null
// node = null
// return 42
