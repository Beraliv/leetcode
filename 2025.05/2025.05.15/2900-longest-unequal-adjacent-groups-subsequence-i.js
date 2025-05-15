/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function (words, groups) {
  // Solution: Iteration
  // Time: O(N)
  // Space: O(1)

  if (words.length !== groups.length) {
    return [];
  }

  const n = words.length;
  const result = [];
  let prev = -1;

  for (let i = 0; i < n; i++) {
    if (prev === -1 || groups[i] !== prev) {
      result.push(words[i]);
      prev = groups[i];
    }
  }

  return result;
};
