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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
  // Solution: DFS with return value
  // Time: O(N)
  // Space: O(N)

  const dfs = (node) => {
    if (!node) return { depth: 0, node: null };

    let leftInfo = dfs(node.left);
    let rightInfo = dfs(node.right);

    if (leftInfo.depth > rightInfo.depth) {
      return { depth: leftInfo.depth + 1, node: leftInfo.node };
    }

    if (leftInfo.depth < rightInfo.depth) {
      return { depth: rightInfo.depth + 1, node: rightInfo.node };
    }

    return { depth: leftInfo.depth + 1, node };
  };

  return dfs(root).node;
};
