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

function revertInPlace(head: ListNode): ListNode | null {
  let newHead: ListNode | null = null;
  let node: ListNode | null = head;
  while (node !== null) {
    const nextNode: ListNode | null = node.next;
    node.next = newHead;
    newHead = node;
    node = nextNode;
  }
  return newHead;
}

// [1,_2_,1] (1 => 2)
// length = 3
// targetIndex = 1
// [1,_2_,2,1] (1 => 2)

function isPalindrome(head: ListNode | null): boolean {
  if (head === null) {
    return true;
  }

  // 1. length
  let length = 0;
  let node = head;
  while (node !== null) {
    length++;
    // @ts-expect-error
    node = node.next;
  }
  // 2. parent for second half
  let targetIndex = length % 2 === 0 ? length / 2 - 1 : (length - 1) / 2;
  let index = 0;
  let targetNode = head;
  while (index !== targetIndex) {
    index++;
    // @ts-expect-error
    targetNode = targetNode.next;
  }
  // 3. revert in place
  // 4. compare
  let first = head;
  // @ts-expect-error
  let second = revertInPlace(targetNode.next);
  while (first !== null && second !== null) {
    if (first.val !== second.val) {
      return false;
    }
    // @ts-expect-error
    first = first.next;
    second = second.next;
  }
  return true;
}

console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(1)))));
