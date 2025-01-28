const A_CODE = "A".charCodeAt(0);

const getIndex = (ch) => ch.charCodeAt(0) - A_CODE;

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let start = 0;
  const freqs = Array(26).fill(0);
  let maxFreq = 0;
  let maxLength = 0;

  for (let end = 0; end < s.length; end++) {
    const endIndex = getIndex(s[end]);
    const freq = ++freqs[endIndex];
    maxFreq = Math.max(maxFreq, freq);

    const isValid = end - start + 1 - maxFreq <= k;
    if (!isValid) {
      const startIndex = getIndex(s[start]);
      freqs[startIndex]--;
      start++;
    }

    maxLength = end - start + 1;
  }

  return maxLength;
};
