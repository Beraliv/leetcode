const A_CODE = 97;

/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
  // Solution: Frequency Count
  // Time: O(N)
  // Space: O(1)

  const freq = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i) - A_CODE;
    freq[code]++;
  }

  let maxOdd = 0,
    minEven = Infinity;
  for (let i = 0; i < 26; i++) {
    if (freq[i] % 2 === 1) {
      maxOdd = Math.max(maxOdd, freq[i]);
    } else if (freq[i] > 0) {
      minEven = Math.min(minEven, freq[i]);
    }
  }

  return maxOdd > 0 && minEven < Infinity ? maxOdd - minEven : -1;
};
