/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

const getDepth = (node) => {
  let depth = 0;
  while (node.parent !== null) {
    depth++;
    node = node.parent;
  }
  return depth;
};

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function (p, q) {
  // Solution 1. O(N) time, O(N) space
  // path to route
  //   const set = new Set();
  //   set.add(p);
  //   let node = p;
  //   while (node.parent !== null) {
  //     set.add(node.parent);
  //     node = node.parent;
  //   }
  //   node = q;
  //   while (node !== null) {
  //     if (set.has(node)) {
  //       return node;
  //     }
  //     node = node.parent;
  //   }
  // Solution 2. O(N) time, O(1) space

  let pDepth = getDepth(p);
  let qDepth = getDepth(q);

  while (pDepth !== qDepth) {
    if (pDepth > qDepth) {
      p = p.parent;
      pDepth--;
    } else if (pDepth < qDepth) {
      q = q.parent;
      qDepth--;
    }
  }

  while (p !== q) {
    p = p.parent;
    q = q.parent;
  }

  return p;
};
