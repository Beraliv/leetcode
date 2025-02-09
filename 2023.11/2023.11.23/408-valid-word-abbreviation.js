const isDigit = (ch) => /\d/.test(ch);

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  let i = 0,
    j = 0,
    number = 0;

  while (j < abbr.length) {
    if (isDigit(abbr[j])) {
      if (number === 0 && abbr[j] === "0") {
        // leading zero
        return false;
      }

      number = number * 10 + Number(abbr[j]);
      j++;
    } else if (number > 0) {
      i += number;
      number = 0;
    } else if (i < word.length && word[i] === abbr[j]) {
      i++;
      j++;
    } else {
      return false;
    }
  }

  // run out of symbols in word and abbr
  return i + number === word.length && j === abbr.length;
};
