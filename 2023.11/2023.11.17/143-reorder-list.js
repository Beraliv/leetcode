const findMiddle = (head) => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const reverse = (head) => {
  let newHead = null;
  let node = head;

  while (node !== null) {
    const nodeNext = node.next;
    node.next = newHead;
    newHead = node;
    node = nodeNext;
  }

  return newHead;
};

const merge = (first, second) => {
  while (second.next !== null) {
    let temp = first.next;
    first.next = second;
    first = temp;

    temp = second.next;
    second.next = first;
    second = temp;
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
    return null;
  }

  const middle = findMiddle(head);
  const reversedEnd = reverse(middle);
  merge(head, reversedEnd);
};

// Node(1) => Node(3)
// Node(2) => Node(3)
// Node(3) => Node(2)
// ____________________________
// Node(1) => Node(2) => Node(3)
// startNode = Node(1), startIndex = 0
// endNode = Node(3), endIndex = 2
// startNextNode = Node(2)
