const isAlmostEqual = (ch1, ch2) =>
  Math.abs(ch1.charCodeAt(0) - ch2.charCodeAt(0)) <= 1;

/**
 * @param {string} word
 * @return {number}
 */
var removeAlmostEqualCharacters = function (word) {
  let changes = 0;

  let i = 1;

  while (i < word.length) {
    if (isAlmostEqual(word[i - 1], word[i])) {
      changes++;
      i += 2;
    } else {
      i++;
    }
  }

  return changes;
};
