/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  let count = 0;
  for (let i = 0; i < k; i++) {
    count += vowels.has(s[i]) ? 1 : 0;
  }

  let maxCount = count;
  for (let i = k; i < s.length; i++) {
    count += (vowels.has(s[i]) ? 1 : 0) - (vowels.has(s[i - k]) ? 1 : 0);
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};
