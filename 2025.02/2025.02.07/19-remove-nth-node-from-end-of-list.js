export {};

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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

function removeNthFromEnd(head, n) {
  // 11min
  // Solution 1. Stack + parent removal
  // Time: O(N)
  // Space: O(N)
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

  // 9min
  // Solution 2: 2 iterations: length and removal
  // Time: O(N)
  // Space: O(1)

  // // 1. Length
  // let length = 1;
  // let node = head;
  // while (node.next !== null) {
  //     node = node.next;
  //     length++;
  // }

  // // 2. remove `length - n`
  // let removeIndex = length - n;
  // if (removeIndex === 0) {
  //     head = head.next;
  //     return head;
  // }

  // node = head;
  // for (let i = 0; i < removeIndex - 1; i++) {
  //     node = node.next;
  // }

  // node.next = node.next.next;

  // return head;

  // 12 min
  // Solution 3.
  // Time: O(N)
  // Space: O(1)
  let dummy = new ListNode(-1);
  dummy.next = head;

  let start = dummy;
  let end = dummy;
  for (let i = 0; i < n; i++) {
    end = end.next;
  }

  while (end.next !== null) {
    start = start.next;
    end = end.next;
  }

  start.next = start.next.next;
  return dummy.next;
}
