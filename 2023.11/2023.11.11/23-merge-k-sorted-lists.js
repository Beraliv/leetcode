import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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
  // Time: O(N * L * logL)
  // Space: O(L)

  const queue = new MinPriorityQueue({ priority: (node) => node.val });

  // O(L * log(N * L))
  for (const list of lists) {
    if (list !== null) {
      queue.enqueue(list);
    }
  }

  const dummy = new ListNode();
  let node = dummy;

  // N * L * log(N * L)
  while (!queue.isEmpty()) {
    const list = queue.dequeue().element;

    node.next = new ListNode(list.val);
    node = node.next;

    if (list.next) {
      queue.enqueue(list.next);
    }
  }

  return dummy.next;
};

const buildList = (array) => {
  const dummy = new ListNode();

  let node = dummy;
  for (const value of array) {
    node.next = new ListNode(value);
    node = node.next;
  }

  return dummy.next;
};

const unwrapList = (list) => {
  const array = [];

  let node = list;
  while (node !== null) {
    array.push(node.val);
    node = node.next;
  }

  return array;
};

const test = (sortedArray, expected) => {
  const sortedLists = sortedArray.map(buildList);
  const sortedList = mergeKLists(sortedLists);
  const actual = unwrapList(sortedList);

  if (
    Array.isArray(expected) &&
    actual.every((value, index) => value === expected[index])
  ) {
    throw new Error(`Expected to have ${expected} but got ${actual}`);
  }

  return actual;
};

console.log(
  test([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);
