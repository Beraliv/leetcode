/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  // Solution: HashSet + Iteration
  // Time: O(N)
  // Space: O(N)

  const freqObj = {};
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const reversedWord = `${word[1]}${word[0]}`;
    if (freqObj[reversedWord]) {
      maxLength += 4;
      freqObj[reversedWord]--;
      if (freqObj[reversedWord] === 0) {
        delete freqObj[reversedWord];
      }
    } else {
      freqObj[word] = (freqObj[word] || 0) + 1;
    }
  }
  for (const word of Object.keys(freqObj)) {
    if (word[0] === word[1]) {
      maxLength += 2;
      break;
    }
  }
  return maxLength;
};

console.log(longestPalindrome(["lc", "cl", "gg"])); // 6
console.log(longestPalindrome(["ab", "ty", "yt", "lc", "cl", "ab"])); // 8
console.log(longestPalindrome(["cc", "ll", "xx"])); // 2
console.log(
  longestPalindrome([
    "qo",
    "fo",
    "fq",
    "qf",
    "fo",
    "ff",
    "qq",
    "qf",
    "of",
    "of",
    "oo",
    "of",
    "of",
    "qf",
    "qf",
    "of",
  ])
); // 14
