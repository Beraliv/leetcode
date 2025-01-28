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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  // Solution 1. DFS
  //   let answer: TreeNode | null = null;

  //   function visit(node: TreeNode | null, p: TreeNode, q: TreeNode): boolean {
  //     if (node === null) {
  //       return false;
  //     }

  //     const mid = node.val === p.val || node.val === q.val ? 1 : 0;
  //     const left = visit(node.left, p, q) ? 1 : 0;
  //     const right = visit(node.right, p, q) ? 1 : 0;

  //     const passed = mid + left + right >= 2;

  //     if (passed) {
  //       answer = node;
  //     }

  //     return mid + left + right > 0;
  //   }

  //   visit(root, p, q);

  //   return answer;

  // Solution 2. BFS
  if (!root) {
    return root;
  }

  let stack: TreeNode[] = [root];

  const parentMap = new Map<TreeNode, TreeNode | null>();
  parentMap.set(root, null);

  while (!parentMap.has(p) || !parentMap.has(q)) {
    const node = stack.pop()!;

    if (node.left !== null) {
      parentMap.set(node.left, node);
      stack.push(node.left);
    }

    if (node.right !== null) {
      parentMap.set(node.right, node);
      stack.push(node.right);
    }
  }

  let ancestors = new Set<TreeNode>();

  let parent = p;
  while (parent !== null) {
    ancestors.add(parent);
    parent = parentMap.get(parent)!;
  }

  parent = q;
  while (!ancestors.has(parent)) {
    parent = parentMap.get(parent)!;
  }

  return parent;
}
