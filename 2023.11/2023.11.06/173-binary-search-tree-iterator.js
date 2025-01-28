// 1h

/**
 *
 * @param {number} val number within the node
 * @param {TreeNode} left
 * @param {TreeNode} right
 */
// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

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
 */
var BSTIterator = function (root) {
  this.stack = [];
  this.leftMostInOrder(root);
};

BSTIterator.prototype.leftMostInOrder = function (node) {
  while (node !== null) {
    this.stack.push(node);
    node = node.left;
  }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  const node = this.stack.pop();

  if (node.right !== null) {
    this.leftMostInOrder(node.right);
  }

  return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
