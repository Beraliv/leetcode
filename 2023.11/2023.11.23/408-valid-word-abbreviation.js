const isDigit = (ch) => /\d/.test(ch);

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  let i = 0;

  let digits = "";
  for (let k = 0; k < abbr.length; k++) {
    const ch = abbr[k];

    if (isDigit(ch)) {
      if (digits.length === 0 && ch === "0") {
        // leading zero
        return false;
      }

      digits += ch;
      continue;
    }

    if (digits.length > 0) {
      const skipCount = parseInt(digits);
      i += skipCount;
      digits = "";
    }

    if (i < word.length) {
      if (word[i] === ch) {
        i++;
      } else {
        // symbol didn't match in word and abbr
        return false;
      }
    } else {
      // run out of symbols in word - have more in abbr
      return false;
    }
  }

  if (digits.length > 0) {
    const skipCount = parseInt(digits);
    i += skipCount;
    digits = "";
  }

  // run out of symbols in word and abbr
  return i === word.length;
};
