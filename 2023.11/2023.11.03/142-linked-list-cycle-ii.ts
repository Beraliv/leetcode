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

//  [1, 2, 3]
// set = {1, 2, 3}
// node = null
// return null

// [3, 2, 0, -4, 2c]
// set = {3, 2, 0, -4}
// node = 2
// return 2

function detectCycle(head: ListNode | null): ListNode | null {
  // Solution 1. O(N) time, O(N) space
  // const set = new Set<ListNode>();

  // let node = head;
  // while (node !== null) {
  //     if (set.has(node)) {
  //         return node;
  //     }
  //     set.add(node);
  //     node = node.next;
  // }

  // return null;
  // Solution 2.
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  if (fast === null || fast.next === null) {
    return null;
  }

  fast = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
}
