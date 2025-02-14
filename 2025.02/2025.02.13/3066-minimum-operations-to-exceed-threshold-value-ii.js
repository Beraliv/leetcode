import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  // Solution 1: MinHeap + Iteration
  // Time: O(N * logN)
  // Space: O(N)

  let count = 0;
  const minQueue = new MinPriorityQueue({ priority: (value) => value });
  for (const num of nums) {
    minQueue.enqueue(num);
  }

  while (true) {
    // if (minQueue.size < 2) {
    //     return -1;
    // }

    const smallest = minQueue.dequeue().element;
    if (smallest >= k) {
      break;
    }

    const largest = minQueue.dequeue().element;

    minQueue.enqueue(smallest * 2 + largest);
    count++;
  }

  return count;
};
