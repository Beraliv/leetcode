export {};

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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let stack1: ListNode[] = [];
  let stack2: ListNode[] = [];

  let node = l1;
  while (node !== null) {
    stack1.push(node);
    node = node.next;
  }

  node = l2;
  while (node !== null) {
    stack2.push(node);
    node = node.next;
  }

  let dummyRoot: ListNode | null = null;
  let previousOverflow = 0;

  while (stack1.length > 0 || stack2.length > 0) {
    let firstNumber = stack1.length > 0 ? stack1.pop()!.val : 0;
    let secondNumber = stack2.length > 0 ? stack2.pop()!.val : 0;
    let sum = firstNumber + secondNumber + previousOverflow;
    let remainder = sum % 10;
    previousOverflow = (sum - remainder) / 10;
    const newDummyRoot = new ListNode(remainder);
    newDummyRoot.next = dummyRoot;
    dummyRoot = newDummyRoot;
  }

  if (previousOverflow > 0) {
    const newDummyRoot = new ListNode(previousOverflow);
    newDummyRoot.next = dummyRoot;
    dummyRoot = newDummyRoot;
  }

  return dummyRoot;
}
