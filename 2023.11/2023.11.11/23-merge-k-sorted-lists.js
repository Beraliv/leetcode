import { MinPriorityQueue } from "@datastructures-js/priority-queue";
import { ListNode } from "../../_util/listNode.js";

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
  // Solution 1: MinHeap
  // Time: O(N * logL)
  // Space: O(L)

  const minHeap = new MinPriorityQueue({ priority: (node) => node.val });

  // O(L * log(N * L))
  for (const list of lists) {
    if (list !== null) {
      minHeap.enqueue(list);
    }
  }

  const dummy = new ListNode();
  let node = dummy;

  // N * logL
  while (!minHeap.isEmpty()) {
    const list = minHeap.dequeue().element;

    node.next = new ListNode(list.val);
    node = node.next;

    if (list.next) {
      minHeap.enqueue(list.next);
    }
  }

  return dummy.next;

  // Solution 2: Merge lists with Divide and Conquer
  // Time: O(N * logL)
  // Space: O(1)

  // TODO: to explore
};

// =======================
//         TESTING
// =======================

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
