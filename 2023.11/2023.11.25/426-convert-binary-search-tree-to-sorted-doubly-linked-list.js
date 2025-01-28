/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

const doubleLink = (left, right) => {
  if (left !== null) {
    left.right = right;
  }
  right.left = left;
};

/**
 * 14min
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (root === null) {
    return null;
  }

  let newRoot = null;
  let previousNode = null;

  // O(N) time, O(H) space
  // 1. BST => LNR DFS (left => node => right)
  const dfs = (node) => {
    if (node.left !== null) {
      dfs(node.left);
    }

    // 1.2. we need to set new root which will be first node we visit
    if (newRoot === null) {
      newRoot = node;
    }

    // 1.1 visit(node) => previous element right link and for current node left link are changed
    doubleLink(previousNode, node);

    previousNode = node;

    if (node.right !== null) {
      dfs(node.right);
    }
  };

  dfs(root);

  // 2. connect last with first
  doubleLink(previousNode, newRoot);

  // 3. return new root
  return newRoot;
};

//   2
// 1   3

// root = Node(2, Node(1, null, Node(2)), Node(3))

// newRoot = Node(1, Node(3), Node(2))
// previousNode = Node(3, Node(2), Node(1))
// node = Node(2, Node(1), Node(3))
// node = Node(1)
// node = Node(3, Node(2), Node(1))
