function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const dfs = (node, visit) => {
  if (node.left !== null) {
    dfs(node.left, visit);
  }
  visit(node);
  if (node.right !== null) {
    dfs(node.right, visit);
  }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const root = new TreeNode(-1);

  const iteration = (start, end, node) => {
    const middle = (start + end) >> 1;
    node.val = nums[middle];

    if (start <= middle - 1) {
      node.left = new TreeNode(-1);
      iteration(start, middle - 1, node.left);
    }
    if (middle + 1 <= end) {
      node.right = new TreeNode(-1);
      iteration(middle + 1, end, node.right);
    }
  };

  iteration(0, nums.length - 1, root);

  return root;
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const bst = sortedArrayToBST(nums);
const sortedArray = [];
dfs(bst, (node) => {
  sortedArray.push(node.val);
});
console.log("before: ", nums);
console.log("after:  ", sortedArray);
