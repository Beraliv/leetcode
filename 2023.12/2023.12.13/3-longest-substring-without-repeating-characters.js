/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let end = 0;

  let maxLength = 0;
  let set = new Set();

  while (end < s.length) {
    const ch = s[end];

    if (set.has(ch)) {
      maxLength = Math.max(maxLength, end - start);

      while (s[start] !== ch) {
        set.delete(s[start++]);
      }

      start++;
    } else {
      set.add(ch);
    }

    end++;
  }

  maxLength = Math.max(maxLength, end - start);

  return maxLength;
};

// abcab
// start = 2, end = 5
// maxLength = 3
// set = {a, b, c}
// ch = a
