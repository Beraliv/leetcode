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

function partition(head: ListNode | null, x: number): ListNode | null {
  // 1. dummy for lte and gte x
  const lteHead = new ListNode(-1);
  let lteLast = lteHead;
  const gteHead = new ListNode(-1);
  let gteLast = gteHead;
  // 2. iterate over list and add it to either lte or gte
  let node = head;
  while (node !== null) {
    const savedNode = node;
    node = node.next;
    savedNode.next = null;

    if (savedNode.val < x) {
      lteLast.next = savedNode;
      lteLast = lteLast.next;
    } else {
      gteLast.next = savedNode;
      gteLast = gteLast.next;
    }
  }
  // 3. connect lte and gte
  lteLast.next = gteHead.next;
  return lteHead.next;
}
