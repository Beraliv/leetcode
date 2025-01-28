export {};

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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

//  [1, 2, 3], 2
// node = 1, [1]
// node = 2, [1, 2]
// node = 3, [1, 2, 3]
// null
// [1, 2], n = 1
// [1], n = 0
// parent = 1, [1, 3]

// [1, 2], 1
// node = 1, [1]
// node = 2, [1, 2]
// null
// [1, 2], n = 1
// [1]
// parent = 1 [1]

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // O(N) time and space - 11m
  // let stack: ListNode[] = [];

  // let node = head;
  // while (node !== null) {
  //     stack.push(node);
  //     node = node.next;
  // }

  // while (n > 0) {
  //     stack.pop();
  //     n--;
  // }

  // if (stack.length === 0) {
  //     head = head.next;
  //     return head;
  // }

  // const parent = stack.pop();
  // if (parent.next) {
  //     parent.next = parent.next.next
  // }

  // return head;

  // O(N) time and O(1) space - 9m
  // 1. count length
  // let length = 0;
  // let node = head;
  // while (node !== null) {
  //     length++;
  //     node = node.next;
  // }
  // // 2. found length - n element
  // let targetIndex = length - n;
  // let index = 0;
  // node = head;
  // let parent: ListNode | null = null;
  // while (node !== null) {
  //     if (index === targetIndex) {
  //         // 3. if it's head, then move the head
  //         if (node === head) {
  //             return node.next
  //         }

  //         // 4. otherwise, find parent and update next link
  //         parent.next = node.next;
  //         return head;
  //     }
  //     index++;
  //     parent = node;
  //     node = node.next;
  // }

  // [1, 2, 3], 2
  //  [-1, 1, 2, 3]
  //    ^     ^
  //       ^     ^

  // [1], 1
  // [-1, 1]
  //   ^  ^
  // 12m
  let dummy = new ListNode(-1);
  dummy.next = head;

  let start = dummy;
  let end = dummy;
  for (let i = 0; i < n; i++) {
    // @ts-expect-error: problem constraints
    end = end.next;
  }

  while (end.next !== null) {
    // @ts-expect-error: problem constraints
    start = start.next;
    end = end.next;
  }

  // @ts-expect-error: problem constraints
  start.next = start.next.next;
  return dummy.next;
}
