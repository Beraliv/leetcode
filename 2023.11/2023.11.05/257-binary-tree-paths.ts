export {};

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 1 => 2 3 => null 5 null null
// root = 1
// path = ['1->2->5','1->3']

const createPath = (path: string, value: number) => `${path}->${value}`;

// 12m
function binaryTreePaths(root: TreeNode | null): string[] {
  if (root === null) {
    return [];
  }

  const paths: string[] = [];

  const stack: { node: TreeNode; path: string }[] = [
    { node: root, path: `${root.val}` },
  ];

  while (stack.length > 0) {
    const { node, path } = stack.pop()!;

    if (node.left === null && node.right === null) {
      paths.push(path);
    }
    if (node.left !== null) {
      stack.push({ node: node.left, path: createPath(path, node.left.val) });
    }
    if (node.right !== null) {
      stack.push({ node: node.right, path: createPath(path, node.right.val) });
    }
  }

  return paths;
}
