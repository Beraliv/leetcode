/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function (word, k) {
  // Solution: Frequency Counting + Greedy for all characters
  // Time: O(N)
  // Space: O(1)

  if (word.length === 0) {
    return 0; // No characters to delete
  }

  const frequencies = new Array(26).fill(0);
  for (const char of word) {
    frequencies[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  let minDeletions = Infinity;
  for (let i = 0; i < 26; i++) {
    const minFrequency = frequencies[i];
    let deletions = 0;

    for (let j = 0; j < 26; j++) {
      if (i === j) continue;

      const frequency = frequencies[j];
      if (frequency < minFrequency) {
        deletions += frequency;
      } else if (frequency > minFrequency + k) {
        deletions += frequency - (minFrequency + k);
      }
    }

    minDeletions = Math.min(minDeletions, deletions);
  }

  return minDeletions;
};

console.log(minimumDeletions("aabcaba", 0)); // 3
// a = 4
// b = 2
// c = 1
// (4 - 1) + (2 - 1) + (1 - 1) = 4

console.log(minimumDeletions("dabdcbdcdcd", 2)); // 2
// a = 1
// b = 2
// c = 3
// d = 5
