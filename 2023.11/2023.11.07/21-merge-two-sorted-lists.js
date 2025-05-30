/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//  17m
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // Time: O(L1 + L2)
  // Space: O(1)

  let dummy = new ListNode(-1);

  let merged = dummy;
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      merged.next = list1;
      list1 = list1.next;
    } else {
      merged.next = list2;
      list2 = list2.next;
    }
    merged = merged.next;
  }

  merged.next = list1 !== null ? list1 : list2;

  return dummy.next;
};
