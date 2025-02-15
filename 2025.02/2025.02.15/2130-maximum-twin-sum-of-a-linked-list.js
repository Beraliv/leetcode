import { ListNode } from "../../_util/listNode.js";

const findMiddleParent = (head) => {
  // Time: O(N)
  // Space: O(1)

  let slow = head,
    fast = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const reverse = (head) => {
  // Time: O(N)
  // Space: O(1)

  let prev = null;
  let curr = head;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  // Solution: Middle (Slow + fast iteration) + Reverse + 2 pointers
  // Time: O(N)
  // Space: O(1)

  if (head === null) return 0;

  const middleParent = findMiddleParent(head);
  const reversedTail = reverse(middleParent.next);
  middleParent.next = null;

  let maxSum = -Infinity;
  let left = head,
    right = reversedTail;
  while (left !== null && right !== null) {
    maxSum = Math.max(maxSum, left.val + right.val);
    left = left.next;
    right = right.next;
  }

  return maxSum;
};

const test1 = new ListNode(
  5,
  new ListNode(4, new ListNode(3, new ListNode(1)))
);
console.log(pairSum(test1));
