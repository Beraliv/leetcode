const A_CODE = 97;

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function (s, k) {
  // Solution: Sliding Window
  // Time: O(N)
  // Space: O(1)

  let count = 0;
  let cache = 0;
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    while (cache & (1 << (s.charCodeAt(end) - A_CODE))) {
      cache ^= 1 << (s.charCodeAt(start++) - A_CODE);
    }
    cache |= 1 << (s.charCodeAt(end) - A_CODE);
    if (end - start + 1 === k) {
      count++;
      cache ^= 1 << (s.charCodeAt(start++) - A_CODE);
    }
  }
  return count;
};

console.log(numKLenSubstrNoRepeats("havefunonleetcode", 5)); // 6
console.log(numKLenSubstrNoRepeats("home", 5)); // 0
