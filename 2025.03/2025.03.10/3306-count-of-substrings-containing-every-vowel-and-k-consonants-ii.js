const isVowel = (ch) => ["a", "e", "i", "o", "u"].includes(ch);

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  // Solution 1: 2 pass + Sliding Window + Looser conditions
  // Time: O(N)
  // Space: O(1)

  return atLeastK(word, k) - atLeastK(word, k + 1);
};

const atLeastK = function (word, k) {
  const vowels = new Map();
  let consonants = 0;

  let count = 0,
    start = 0,
    end = 0;

  while (end < word.length) {
    if (isVowel(word[end])) {
      vowels.set(word[end], (vowels.get(word[end]) || 0) + 1);
    } else {
      consonants++;
    }

    while (vowels.size === 5 && consonants >= k) {
      count += word.length - end;
      if (isVowel(word[start])) {
        const amount = vowels.get(word[start]);
        if (amount === 1) {
          vowels.delete(word[start]);
        } else {
          vowels.set(word[start], amount - 1);
        }
      } else {
        consonants--;
      }
      start++;
    }

    end++;
  }

  return count;
};

console.log(countOfSubstrings("aeioqq", 1)); // 0
console.log(countOfSubstrings("aeiou", 0)); // 1
console.log(countOfSubstrings("ieaouqqieaouqq", 1)); // 3
console.log(countOfSubstrings("iqeaouqi", 2)); // 3
console.log(countOfSubstrings("aadieuoh", 1)); // 2
