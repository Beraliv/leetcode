import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  // Solution 1: 2 Sort + Slice + 2 Iteration
  // Time: O(N * LogN)
  // Space: O(N)

  //   const numsWithIndex = nums.map((num, index) => [num, index]);
  //   numsWithIndex.sort((a, b) => b[0] - a[0]);
  //   const result = numsWithIndex
  //     .slice(0, k)
  //     .sort((a, b) => a[1] - b[1])
  //     .map((item) => item[0]);

  //   return result;

  // Solution 2: Min Heap + Sort
  // Time: O(N * logK)
  // Space: O(K)

  const maxHeap = new MinPriorityQueue((pair) => pair[0]);

  for (let i = 0; i < nums.length; i++) {
    maxHeap.enqueue([nums[i], i]);

    if (maxHeap.size() > k) {
      maxHeap.dequeue();
    }
  }

  const answer = [];
  while (!maxHeap.isEmpty()) {
    answer.push(maxHeap.dequeue());
  }

  answer.sort((a, b) => a[1] - b[1]);

  return answer.map((item) => item[0]);
};

console.log(maxSubsequence([2, 1, 3, 3], 2)); // [3,3]
console.log(maxSubsequence([-1, -2, 3, 4], 3)); // [-1,3,4]
console.log(maxSubsequence([3, 4, 3, 3], 2)); // [3,4]
