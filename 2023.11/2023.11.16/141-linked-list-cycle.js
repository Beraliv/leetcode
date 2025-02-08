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

function hasCycle(head) {
  // Solution 1
  // Time: O(N)
  // Space: O(N)
  // const set = new Set();

  // let node = head;

  // while (node !== null) {
  //   if (set.has(node)) {
  //     return true;
  //   }
  //   set.add(node);
  //   node = node.next;
  // }

  // return false;

  // Solution 2: Floyd's Cycle Finding Algorithm
  // Time: O(N)
  // Space: O(1)

  if (head === null) {
    return false;
  }

  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
