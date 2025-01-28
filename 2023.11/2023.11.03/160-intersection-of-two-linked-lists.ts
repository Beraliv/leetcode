/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// 7m
function getIntersectionNode(
  headA: ListNode,
  headB: ListNode
): ListNode | null {
  // Solution 1. O(M + N) time, O(M) space
  // const set = new Set<ListNode>();

  // let node = headA;
  // while (node !== null) {
  //     set.add(node);
  //     node = node.next;
  // }

  // node = headB;
  // while (node !== null) {
  //     if (set.has(node)) {
  //         return node;
  //     }

  //     node = node.next;
  // }

  // return null;
  // Solution 2. O(M + N) time, O(1) space
  let m = 0;
  let node = headA;
  while (node !== null) {
    m++;
    node = node.next;
  }

  let n = 0;
  node = headB;
  while (node !== null) {
    n++;
    node = node.next;
  }

  let nodeA = headA;
  let nodeB = headB;

  if (m > n) {
    while (m !== n) {
      nodeA = nodeA.next;
      m--;
    }
  } else if (n > m) {
    while (m !== n) {
      nodeB = nodeB.next;
      n--;
    }
  }

  while (nodeA !== null && nodeB !== null) {
    if (nodeA === nodeB) {
      return nodeA;
    }

    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }

  return null;
}
