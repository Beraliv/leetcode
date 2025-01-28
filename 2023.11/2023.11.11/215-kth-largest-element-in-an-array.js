import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const minHeap = new MinPriorityQueue({ priority: (value) => value });

  // N * logK
  for (const num of nums) {
    minHeap.enqueue(num);

    if (minHeap.size() > k) {
      minHeap.dequeue();
    }
  }

  return minHeap.dequeue().element;
};

console.log(findKthLargest([10, 4, 7, 2, 3], 2));
