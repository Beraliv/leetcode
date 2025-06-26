/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function (s, k) {
  // Solution: Right to Left Iteration + Greedy
  // Time: O(N)
  // Space: O(1)

  let number = 0,
    count = 0,
    limit = Math.log2(k) + 1;

  for (let i = 0; i < s.length; i++) {
    // move right to left
    const ch = s[s.length - 1 - i];

    if (ch === "0") {
      count++;
    } else if (ch === "1") {
      if (i >= limit) {
        // exceeds the limit, because 1 is the leftmost bit, which will be gte to k
        continue;
      }

      let nextNumber = number + (1 << i);
      if (nextNumber <= k) {
        number = nextNumber;
        count++;
      }
    }
  }

  return count;
};

console.log(longestSubsequence("1001010", 5)); // 5
console.log(longestSubsequence("00101001", 1)); // 6
console.log(
  longestSubsequence(
    "111100010000011101001110001111000000001011101111111110111000011111011000010101110100110110001111001001011001010011010000011111101001101000000101101001110110000111101011000101",
    11713332
  )
); // 96
