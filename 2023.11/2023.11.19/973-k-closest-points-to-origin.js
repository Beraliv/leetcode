import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  // Solution: MaxHeap
  // Time: O(N * logK)
  // Space: O(K)

  const maxHeap = new MaxPriorityQueue({
    priority: ([x, y]) => Math.sqrt(x * x + y * y),
  });

  for (const point of points) {
    maxHeap.enqueue(point);

    if (maxHeap.size() > k) {
      maxHeap.dequeue();
    }
  }

  const answer = [];
  while (!maxHeap.isEmpty()) {
    answer.push(maxHeap.dequeue().element);
  }
  return answer;
};
