/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  // Solution 1. O(N * logN) time, O(N) space
  // const frequencyMap = new Map();

  // for (const word of words) {
  //     frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
  // }

  // return [...frequencyMap.keys()]
  //     .sort((a, b) => {
  //         const fr1 = frequencyMap.get(a);
  //         const fr2 = frequencyMap.get(b);

  //         if (fr1 === fr2) {
  //             return lexicoGraphicalOrder(a, b);
  //         }

  //         return increasingOrder(fr2, fr1);
  //     })
  //     .slice(0, k);

  // Solution 2. O(N * logK) time, O(K) space
  const frequencyMap = new Map();

  // 1. Count frequencies
  // O(N) time, O(N) extra space
  for (const word of words) {
    frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
  }

  // 2. Use min priority queue with custom comparators to keep only K most frequent words
  // therefore have logK multiplier in time complexity instead of logN for max priority queue (because you keep N most frequent words)
  const minQueue = new MinPriorityQueue({
    // 2.1. Custom comparator to make sure:
    compare: (a, b) => {
      const fr1 = frequencyMap.get(a);
      const fr2 = frequencyMap.get(b);

      if (fr1 === fr2) {
        // 2.1.2. The closer words to the end of alphabet, the higher they are in PriorityQueue, therefore candidates to be removed
        // z ... a
        return b.localeCompare(a);
      }

      // 2.1.2. The less frequent words, the higher they are in PriorityQueue, therefore candidates to be removed
      // 0 ... 9
      return fr1 - fr2;
    },
  });

  // 3. Find K most frequent words
  // O(N * logK) time, O(K) extra space
  for (const word of frequencyMap.keys()) {
    minQueue.enqueue(word);

    if (minQueue.size() > k) {
      minQueue.dequeue();
    }
  }

  // 4. Min priority queue has reversed order so iterate from end to the start to have the expected order
  // O(K) time, O(N) space
  const answer = Array(k).fill(0);
  let i = k - 1;
  while (minQueue.size() > 0) {
    answer[i--] = minQueue.dequeue();
  }

  return answer;
};
