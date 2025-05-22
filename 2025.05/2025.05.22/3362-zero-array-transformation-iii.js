import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maxRemoval = function (nums, queries) {
  // Solution 1: Diff Array + Greedy + Max Heap
  // Time: O(N * Q * logQ)
  // Space: O(N + Q)

  queries.sort((a, b) => a[0] - b[0]);
  let qIndex = 0;

  const endMaxHeap = new MaxPriorityQueue();

  const diffArray = new Int32Array(nums.length + 1);
  let diff = 0;

  for (let t = 0; t < nums.length; t++) {
    diff += diffArray[t];

    while (qIndex < queries.length && queries[qIndex][0] === t) {
      const end = queries[qIndex][1];
      endMaxHeap.enqueue(end);
      qIndex++;
    }

    while (diff < nums[t]) {
      if (endMaxHeap.isEmpty() || endMaxHeap.front() < t) {
        return -1;
      }

      diff++;
      diffArray[t]++;
      diffArray[endMaxHeap.front() + 1]--;
      endMaxHeap.dequeue();
    }
  }

  return endMaxHeap.size();
};

console.log(
  maxRemoval(
    [2, 0, 2],
    [
      [0, 2],
      [0, 2],
      [1, 1],
    ]
  )
); // 1
console.log(
  maxRemoval(
    [1, 1, 1, 1],
    [
      [1, 3],
      [0, 2],
      [1, 3],
      [1, 2],
    ]
  )
); // 2
console.log(
  maxRemoval(
    [0, 0, 3],
    [
      [0, 2],
      [1, 1],
      [0, 0],
      [0, 0],
    ]
  )
); // -1
