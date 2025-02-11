/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // Solution: Sliding Window + HashSet
  // Time: O(N)
  // Space: O(N)

  let start = 0,
    end = 0;
  const charSet = new Set();
  let maxLength = 0;

  while (end < s.length) {
    maxLength = Math.max(maxLength, end - start);

    while (charSet.has(s[end])) {
      charSet.delete(s[start++]);
    }

    charSet.add(s[end++]);
  }

  return Math.max(maxLength, end - start);
};
