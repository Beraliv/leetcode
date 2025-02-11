/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  // Solution 1. No dummy and recursive DFS
  // Time: O(N), where N is a number of nodes
  // Space: O(L), where L is a number of levels

  //   if (head === null) {
  //     return null;
  //   }

  //   const dfs = (node) => {
  //     while (node.next !== null && node.child === null) {
  //       node = node.next;
  //     }

  //     if (node.child !== null) {
  //       const next = node.next;
  //       const child = node.child;
  //       node.next = child;
  //       child.prev = node;
  //       node.child = null;

  //       const lastNode = dfs(child);
  //       if (next === null) {
  //         return lastNode;
  //       }

  //       lastNode.next = next;
  //       next.prev = lastNode;
  //       return dfs(next);
  //     } else if (node.next === null) {
  //       return node;
  //     }
  //   };

  //   dfs(head);

  //   return head;

  // Solution 2: Dummy and recursive DFS
  // Time: O(N), where N is a number of nodes
  // Space: O(L), where L is a number of levels
  if (head === null) {
    return null;
  }

  const dummy = new Node(-1);

  const flattenDfs = (prev, curr) => {
    if (curr === null) {
      return prev;
    }
    curr.prev = prev;
    prev.next = curr;

    let tailNext = curr.next;
    let tail = flattenDfs(curr, curr.child);
    curr.child = null;
    return flattenDfs(tail, tailNext);
  };

  flattenDfs(dummy, head);

  dummy.next.prev = null;

  return dummy.next;
};

// 1 2 6
//   3 5
//   4
