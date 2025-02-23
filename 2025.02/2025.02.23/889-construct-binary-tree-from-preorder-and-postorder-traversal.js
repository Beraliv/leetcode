/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  // Solution: DFS
  // Time: O(N)
  // Space: O(N)

  if (preorder.length !== postorder.length) return null;
  if (preorder.length + preorder.length === 0) return null;

  let preindex = 0,
    postindex = 0;

  const dfs = () => {
    // pre-order: root => left => right
    // post-order: left => right => root

    const root = new TreeNode(preorder[preindex]);
    preindex++;

    if (root.val !== postorder[postindex]) {
      root.left = dfs();
    }

    if (root.val !== postorder[postindex]) {
      root.right = dfs();
    }

    postindex++;

    return root;
  };

  return dfs();
};

// [1, [2, null, [5]], [3, [6], null]]
console.log(constructFromPrePost([1, 2, 5, 3, 6], [5, 2, 6, 3, 1]));
