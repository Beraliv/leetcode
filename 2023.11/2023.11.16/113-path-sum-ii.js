/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** 13m
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (root === null) {
    return [];
  }

  const paths = [];

  // O(N + N * H), where N - number of nodes, H (can be logN or even N)
  // O(N ** 2)

  const dfs = (node, sum, path = []) => {
    if (node.left === null && node.right === null && node.val === sum) {
      path.push(node.val);
      paths.push([...path]);
      path.pop();
      return;
    }

    const nextSum = sum - node.val;

    if (node.left !== null) {
      path.push(node.val);
      dfs(node.left, nextSum, path);
      path.pop();
    }

    if (node.right !== null) {
      path.push(node.val);
      dfs(node.right, nextSum, path);
      path.pop();
    }
  };

  dfs(root, targetSum);

  return paths;
};

// targetSum = 3
//   1
// 3   2
// paths = [[1,2]]
// node = Node(1), sum = 3, path = []
// nextSum = 3 - 1 = 2
