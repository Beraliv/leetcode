const revert = (head, end) => {
  let prev = null;
  let curr = head;
  while (curr !== end) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// revert (2 => 1 => null, 3, end = 3)
// prev = 2, curr = 3

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  // Solution 1. 2 pointers to keep K-block, revert if there are enough elements
  // Time: O(N)
  // Space: O(1)

  if (head === null) {
    return null;
  }

  if (k === 1) {
    return head;
  }

  // 1. 2 pointers to find the end of K-block
  // e.g. A1 => ... => AK => B
  let start = head;
  let end = head;
  for (let i = 0; i < k; i++) {
    // don't have enough elements, return head
    if (end === null) {
      return head;
    }

    end = end.next;
  }

  // 2. Revert the block, i.e. AK => ... => A1 => B
  let tail = head;
  head = revert(start, end);

  // 3. Move to the next K-block, if it exists
  whileLoop: while (end !== null) {
    start = end;

    for (let i = 0; i < k; i++) {
      // don't have enough elements
      if (end === null) {
        break whileLoop;
      }

      end = end.next;
    }

    tail.next = revert(start, end);
    tail = start;
  }

  // we didn't run `whileLoop`
  if (tail !== start) {
    tail.next = start;
  }

  return head;
};

// head = 2 => 1 => null, k = 2
// start = 1, end = null
// tail = 1, revert(1 => 2 => null, null) = 2 => 1 => null

// head = 2 => 1 => null, 3
// k = 2
// start = 1, end = 3
// tail = 1
// revert(1 => 2 => 3, 3) => 2 => 1 => null
// start = 3, end = null
// i = 0
