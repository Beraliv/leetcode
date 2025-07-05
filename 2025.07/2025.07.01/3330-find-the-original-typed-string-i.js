/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
  // Solution: Count repeated characters
  // Time: O(N)
  // Space: O(1)

  let count = 1;
  let i = 0;
  while (i < word.length) {
    let start = i;
    while (i + 1 < word.length && word[i + 1] === word[start]) {
      i++;
    }
    count += i - start;
    i++;
  }
  return count;
};

console.log(possibleStringCount("abbcccc")); // 5
console.log(possibleStringCount("abcd")); // 1
console.log(possibleStringCount("aaaa")); // 4
