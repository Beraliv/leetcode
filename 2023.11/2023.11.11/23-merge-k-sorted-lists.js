import MinPriorityQueue from "datastructures-js";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const queue = new MinPriorityQueue({ priority: ({ val }) => val });

  // O(L * log(N * L))
  for (const list of lists) {
    if (list) {
      queue.enqueue(list);
    }
  }

  const dummy = new ListNode();
  let node = dummy;

  // N * L * log(N * L)
  while (!queue.isEmpty()) {
    const { element } = queue.dequeue();
    const { val, next } = element;

    node.next = new ListNode(val);
    node = node.next;

    if (next) {
      queue.enqueue(next);
    }
  }

  return dummy.next;
};

const lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
