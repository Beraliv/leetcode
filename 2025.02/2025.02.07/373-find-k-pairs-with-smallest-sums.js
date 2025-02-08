import { MinPriorityQueue } from "@datastructures-js/priority-queue";

const getHash = (i, j) => `${i}-${j}`;

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  // Time: O(min(K * logK, N1 * N2 * log(N1 * N2))
  // Space: O(min(K, N1 * N2))

  const pairs = [];
  const visited = new Set();
  const minHeap = new MinPriorityQueue({
    priority: ([i, j]) => nums1[i] + nums2[j],
  });

  const markVisited = (i, j) => {
    visited.add(getHash(i, j));
  };

  const hasVisited = (i, j) => visited.has(getHash(i, j));

  minHeap.enqueue([0, 0]);
  markVisited(0, 0);

  let count = 1;
  while (count <= k && !minHeap.isEmpty()) {
    const [i, j] = minHeap.dequeue().element;
    pairs.push([nums1[i], nums2[j]]);
    count++;

    if (i + 1 < nums1.length && !hasVisited(i + 1, j)) {
      minHeap.enqueue([i + 1, j]);
      markVisited(i + 1, j);
    }

    if (j + 1 < nums2.length && !hasVisited(i, j + 1)) {
      minHeap.enqueue([i, j + 1]);
      markVisited(i, j + 1);
    }
  }

  return pairs;
};

console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3)); // [[1,2],[1,4],[1,6]]
