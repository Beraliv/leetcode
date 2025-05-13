const MOD = 1e9 + 7;

/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function (s, t) {
  // Solution: Array + Count
  // Time: O(S + T)
  // Space: O(1)

  let counts = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i) - 97;
    counts[code]++;
  }

  for (let k = 0; k < t; k++) {
    let next = 0;
    for (let i = 0; i < 25; i++) {
      let temp = next;
      next = counts[i];
      counts[i] = temp;
    }
    counts[0] = counts[25];
    counts[1] = (counts[1] + counts[25]) % MOD;
    counts[25] = next;
  }

  let count = 0;
  for (let i = 0; i < 26; i++) {
    count = (count + counts[i]) % MOD;
  }

  return count;
};

console.log(lengthAfterTransformations("abcyy", 2)); // 7
console.log(lengthAfterTransformations("xyz", 3)); // 6
console.log(lengthAfterTransformations("vwxyz", 5)); // 10
console.log(lengthAfterTransformations("jqktcurgdvlibczdsvnsg", 7517)); // 79033769
