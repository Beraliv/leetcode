/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * 33min
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  const insertNode = new Node(insertVal);

  // 0. head === null => create new head and point to itself
  if (head === null) {
    insertNode.next = insertNode;
    return insertNode;
  }
  // 1. head.next === head => insert it as next to head
  if (head.next === head) {
    head.next = insertNode;
    insertNode.next = head;
    return head;
  }

  let previous = head;
  let current = head.next;
  while (current !== head) {
    const isEnd = previous.val > current.val;

    // 2. isEnd = false && node1.val <= insertVal <= node2.val => insert in between
    // 3. isEnd = true && start.val <= end.val <= insertVal => insert after end
    if (
      (!isEnd && previous.val <= insertVal && insertVal <= current.val) ||
      (isEnd && insertVal >= previous.val && insertVal >= current.val) ||
      (isEnd && insertVal <= previous.val && insertVal <= current.val)
    ) {
      previous.next = insertNode;
      insertNode.next = current;

      return head;
    }

    previous = previous.next;
    current = current.next;
  }

  // current = head
  previous.next = insertNode;
  insertNode.next = current;

  return head;
};

// 3 => 4 => 5
// ^=========
// head = Node(3)

// 1. 5
// previous = Node(4)
// current = Node(3)
// isEnd = 3 > 4 = false

// 3 => 4 => 2
// ^=========
// head = Node(3)

// 2. 2
// previous = Node(4)
// current = NOde(3)
// isEnd = false
//

// 3 => 1
// ^=2==
// head = Node(3)

// 1. 2
// previous = Node(1)
// current = Node(3)
// isEnd = true

// 3 => 5 => 1
// ^=========

// 2. 5
// previous = Node(3)
// current = Node(1)
// isEnd = true
