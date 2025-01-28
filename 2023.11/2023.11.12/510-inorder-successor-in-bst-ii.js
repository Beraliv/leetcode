/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

const getSmallestParent = (node) => {
  let smallestParent = node;
  while (
    smallestParent.parent !== null &&
    smallestParent.val > smallestParent.parent.val
  ) {
    smallestParent = smallestParent.parent;
  }
  return smallestParent;
};

const getLeftmost = (node) => {
  let leftmost = node;
  while (leftmost.left !== null) {
    leftmost = leftmost.left;
  }
  return leftmost;
};

/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function (node) {
  if (node.right !== null) {
    return getLeftmost(node.right);
  }

  const smallestParent = getSmallestParent(node);
  if (smallestParent.parent !== null) {
    return smallestParent.parent;
  }

  return null;
};
