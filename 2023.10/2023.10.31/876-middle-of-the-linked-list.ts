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

// 1 2 3, length = 3
// 0, 1
// 1, 2
// 2, 3
// 3, null
// 1
// 0, 1
// 1, 2
// return 2

//  1 2 3 4, length = 4
// 1(0), 2(1), 3(2), 4(3), null(4)
// middleIndex = 2
// 0(1), 1(2), 2(3)

function middleNode(head: ListNode | null): ListNode | null {
  // Solution 1. O(N) time, O(1) space
  // 10m
  // 1. find length
  // let length = 0;
  // let node = head;
  // while (node !== null) {
  //   length++;
  //   node = node.next;
  // }
  // // 2. calculate middle
  // const middleIndex = length % 2 === 1 ? (length - 1) / 2 : length / 2;
  // // 3. Find
  // let index = 0;
  // node = head;
  // while (node !== null) {
  //   if (index === middleIndex) {
  //     return node;
  //   }

  //   index++;
  //   node = node.next;
  // }

  // return null;
  // Solution 2. O(N), O(1) space
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    // @ts-expect-error: problem constraints
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
