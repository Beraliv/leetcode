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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  if (root === null) {
    return;
  }

  let closestValue = Infinity;
  let optimalDistance = Infinity;

  // binary search
  let node = root;
  while (node !== null) {
    const distance = Math.abs(node.val - target);

    if (
      distance < optimalDistance ||
      (distance === optimalDistance && node.val < closestValue)
    ) {
      closestValue = node.val;
      optimalDistance = distance;
    }

    if (node.val > target) {
      node = node.left;
    } else if (node.val < target) {
      node = node.right;
    } else {
      break;
    }
  }

  return closestValue;
};
