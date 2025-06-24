/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  // Solution: Iterate + Slice
  // Time: O(N)
  // Space: O(1)

  const substrings = [];

  for (let i = 0; i < s.length; i += k) {
    let substring = s.slice(i, i + k);
    if (substring.length < k) {
      substring += fill.repeat(k - substring.length);
    }
    substrings.push(substring);
  }

  return substrings;
};
