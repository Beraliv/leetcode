const A_CODE = "a".charCodeAt(0);

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  // Solution: Count Characters
  // Time: O(N)
  // Space: O(1)

  let chars = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    chars[s.charCodeAt(i) - A_CODE]++;
  }

  let odd = 0;
  for (let i = 0; i < 26; i++) {
    if (chars[i] % 2 !== 0) {
      odd++;
    }
    if (odd > 1) {
      return false;
    }
  }

  return true;
};

console.log(canPermutePalindrome("code")); // false
console.log(canPermutePalindrome("aab")); // true
console.log(canPermutePalindrome("carerac")); // true
