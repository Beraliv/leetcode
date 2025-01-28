const predecessor = (node) => {
  node = node.left;
  while (node.right !== null) {
    node = node.right;
  }
  return node.val;
};

const successor = (node) => {
  node = node.right;
  while (node.left !== null) {
    node = node.left;
  }
  return node.val;
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
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) {
    return null;
  }

  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (root.left === null && root.right === null) {
    root = null;
  } else if (root.left !== null) {
    root.val = predecessor(root);
    root.left = deleteNode(root.left, root.val);
  } else {
    root.val = successor(root);
    root.right = deleteNode(root.right, root.val);
  }

  return root;
};
