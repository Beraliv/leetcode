const findPathBetween = (root, target) => {
  const path = [];

  const dfs = (node) => {
    if (node.val === target.val) {
      path.push(node);
      return true;
    }

    const left = node.left !== null ? dfs(node.left) : false;
    const right = node.right !== null ? dfs(node.right) : false;

    if (left || right) {
      path.push(node);
      return true;
    }

    return false;
  };

  dfs(root);

  return path;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // Solution 1. Using parent, O(N) time, O(N) extra space
  // if (root === null) {
  //   return null;
  // }

  // const pathP = findPathBetween(root, p);
  // const pathQ = findPathBetween(root, q);

  // let set = new Set(pathP);
  // for (const node of pathQ) {
  //   if (set.has(node)) {
  //     return node;
  //   }
  // }

  // return null;

  // Solution 2. Don't use parent, O(N) time, O(N) extra space
  if (root === null) {
    return null;
  }

  let oneNodeFound = false;
  let lca = null;
  let childNode = null;

  const stack = [];

  // 0: both visited
  // 1: left visited
  // 2: none visited
  stack.push({ node: root, status: 2 });

  while (stack.length) {
    const { node, status } = stack.pop();

    if (status === 2) {
      if (node === p || node === q) {
        if (oneNodeFound) {
          return lca;
        }

        oneNodeFound = true;
        lca = node;
      }

      childNode = node.left;
    } else if (status === 1) {
      childNode = node.right;
    }

    stack.push({ node, status: status - 1 });

    if (childNode !== null) {
      stack.push({ node: childNode, status: 2 });
    }

    if (status === 0) {
      const top = stack.pop();

      if (lca === top.node && oneNodeFound) {
        lca = stack[stack.length - 1].node;
      }
    }
  }

  return null;
};

//      1
//   2     3
// 4   5 6   7

// 5 3
// findPathBetween(1, 5) = [5, 2, 1]
// findPathBetween(1, 3) = [3, 1]
// set = {5, 2, 1}
