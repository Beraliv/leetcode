/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let closing = 0;
  let opening = 0;

  for (const ch of s) {
    if (ch === "(") {
      opening++;
    } else if (ch === ")") {
      if (opening === 0) {
        closing++;
      } else {
        opening--;
      }
    }
  }

  return closing + opening;
};
