function TreeInfo(height, balanced) {
  this.height = height;
  this.balanced = balanced;
}

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
var isBalanced = function (root) {
  if (!root) {
    return true;
  }

  const balanceSearch = (node, height) => {
    if (node === null) {
      return new TreeInfo(height - 1, true);
    }

    const leftTreeInfo = balanceSearch(node.left, height + 1);
    if (!leftTreeInfo.balanced) {
      return new TreeInfo(height, false);
    }
    const rightTreeInfo = balanceSearch(node.right, height + 1);
    if (!rightTreeInfo.balanced) {
      return new TreeInfo(height, false);
    }

    const treeInfo = new TreeInfo(
      Math.max(leftTreeInfo.height, height, rightTreeInfo.height),
      Math.abs(rightTreeInfo.height - leftTreeInfo.height) <= 1
    );

    return treeInfo;
  };

  return balanceSearch(root, 0).balanced;
};
