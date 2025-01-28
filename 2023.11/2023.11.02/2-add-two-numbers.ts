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

// 13m
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummyRoot = new ListNode(-1);
  let resultNode = dummyRoot;

  let firstNode = l1;
  let secondNode = l2;
  let previousOverflow = 0;
  while (firstNode !== null || secondNode !== null) {
    const firstNumber = firstNode !== null ? firstNode.val : 0;
    const secondNumber = secondNode !== null ? secondNode.val : 0;
    const sum = firstNumber + secondNumber + previousOverflow;
    const remainder = sum % 10;
    previousOverflow = (sum - remainder) / 10;
    resultNode.next = new ListNode(remainder);

    resultNode = resultNode.next;
    if (firstNode !== null) {
      firstNode = firstNode.next;
    }
    if (secondNode !== null) {
      secondNode = secondNode.next;
    }
  }
  if (previousOverflow > 0) {
    resultNode.next = new ListNode(previousOverflow);
  }

  return dummyRoot.next;
}
