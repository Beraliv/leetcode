/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // Solution 1.
  // Time: O(L1 + L2)
  // Space: O(1)
  if (l1 === null || l2 === null) {
    return l1 || l2;
  }
  const dummy = new ListNode();
  let parent = dummy;
  let overflow = 0;
  while (l1 !== null || l2 !== null) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + overflow;
    const val = sum % 10;
    overflow = (sum - val) / 10;
    parent.next = new ListNode(val);
    parent = parent.next;
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  if (overflow > 0) {
    parent.next = new ListNode(overflow);
  }

  return dummy.next;
};
