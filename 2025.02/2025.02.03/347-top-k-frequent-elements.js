import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // Time: O(N) + O(N * logK) + O(K * logK) = O(N * logK), K < N
  // or O(N) when K = N
  // Space: O(N) + O(K) = O(N + K)

  const map = new Map();
  const minQueue = new MinPriorityQueue({
    priority: (value) => map.get(value),
  });

  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 0);
    }
    map.set(num, map.get(num) + 1);
  }

  if (map.size() === k) {
    return [...map.keys()];
  }

  for (const num of map.keys()) {
    minQueue.enqueue(num);
    if (minQueue.size() > k) {
      minQueue.dequeue();
    }
  }

  const result = [];
  while (!minQueue.isEmpty()) {
    result.push(minQueue.dequeue().element);
  }
  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
