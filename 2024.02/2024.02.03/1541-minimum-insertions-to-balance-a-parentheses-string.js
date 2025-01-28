/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  let missed = 0;
  let opening = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === ")") {
      count++;

      if (count === 2) {
        if (opening > 0) {
          opening--;
        } else {
          missed++;
        }
        count = 0;
      }
    }

    if (ch === "(" || i === s.length - 1) {
      if (count === 1) {
        if (opening > 0) {
          opening--;
          missed++;
        } else {
          missed += 2;
        }
        count = 0;
      }
    }

    if (ch === "(") {
      opening++;
    }
  }

  return opening * 2 + missed;
};
