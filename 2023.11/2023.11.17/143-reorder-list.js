import { ListNode } from "../../_util/listNode.js";

const findMiddle = (head) => {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// const test1 = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4)))
// );
// const test2 = new ListNode(1, new ListNode(2, new ListNode(3)));
// console.log(findMiddle(test1).toString());
// console.log(findMiddle(test2).toString());

const reverse = (middle) => {
  let prev = null;
  let curr = middle;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// const node2 = new ListNode(2, new ListNode(3));
// const test3 = new ListNode(1, node2);
// const reversedHead1 = reverse(node2);
// console.log(reversedHead1);

// const node3 = new ListNode(3, new ListNode(4));
// const test4 = new ListNode(1, new ListNode(2, node3));
// const reversedHead2 = reverse(node3);
// console.log(reversedHead2);

const merge = (head1, head2) => {
  while (head2.next !== null) {
    let next = head1.next;
    head1.next = head2;
    head1 = next;

    next = head2.next;
    head2.next = head1;
    head2 = next;
  }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head === null) {
    return;
  }
  const middle = findMiddle(head);
  const reverseHead = reverse(middle);
  return merge(head, reverseHead);
};

// Node(1) => Node(3)
// Node(2) => Node(3)
// Node(3) => Node(2)
// ____________________________
// Node(1) => Node(2) => Node(3)
// startNode = Node(1), startIndex = 0
// endNode = Node(3), endIndex = 2
// startNextNode = Node(2)

const testOdd = new ListNode(1, new ListNode(2, new ListNode(3)));
console.log(`
  Before:   ${testOdd.toString()}
  After:    ${reorderList(testOdd).toString()}
  In place: ${testOdd.toString()}
`);

const testEven = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4)))
);
console.log(`
  Before:   ${testEven.toString()}
  After:    ${reorderList(testEven).toString()}
  In place: ${testEven.toString()}
`);
