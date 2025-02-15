/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  // Solution: HashMap + HashSet
  // Time: O(N)
  // Space: O(N)

  const freqMap = new Map();

  for (const num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const freqSet = new Set();
  for (const freq of freqMap.values()) {
    if (freqSet.has(freq)) {
      return false;
    }

    freqSet.add(freq);
  }

  return true;
};
