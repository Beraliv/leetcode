import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // Solution 1. MinHeap
  // Time: O(N * logK)
  // Space: O(K)

  const minHeap = new MinPriorityQueue({ priority: (value) => value });

  for (const num of nums) {
    minHeap.enqueue(num);

    if (minHeap.size() > k) {
      minHeap.dequeue();
    }
  }

  return minHeap.dequeue().element;

  // Solution 2: Quick Select
  // Time: O(N) average, O(N ^ 2) worst
  // Space: O(logN) average and O(N) worst, stack for recursion

  // Solution 3: Counting Array
  // Time: O(MAX - MIN)
  // Space: O(MAX - MIN)
};

console.log(findKthLargest([10, 4, 7, 2, 3], 2));
