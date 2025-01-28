const A_CODE = "a".charCodeAt(0);

const getCharFromIndex = (index) => String.fromCharCode(A_CODE + index);

const getIndexFromChar = (ch) => ch.charCodeAt(0) - A_CODE;

/**
 * @param {string} s
 * @return {string}
 */
var minimizeStringValue = function (s) {
  const array = Array.from({ length: 26 }, () => -1);

  for (const ch of s) {
    if (ch === "?") continue;

    const index = getIndexFromChar(ch);
    array[index]++;
  }

  const replaced = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "?") {
      let minIndex = -1;
      let minValue = Infinity;
      for (let i = 0; i < array.length; i++) {
        if (array[i] < minValue) {
          minValue = array[i];
          minIndex = i;
        }
      }

      array[minIndex]++;
      const replacedCh = getCharFromIndex(minIndex);
      replaced.push(replacedCh);
    }
  }

  replaced.sort((a, b) => a.localeCompare(b));

  let replacedIndex = 0;

  const answer = [];
  for (const ch of s) {
    if (ch !== "?") {
      answer.push(ch);
    } else if (replacedIndex < replaced.length) {
      answer.push(replaced[replacedIndex++]);
    }
  }

  while (replacedIndex < replaced.length) {
    answer.push(replaced[replacedIndex++]);
  }

  return answer.join("");
};
