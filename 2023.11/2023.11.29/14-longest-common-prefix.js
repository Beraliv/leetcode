/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length < 1) {
    return "";
  }

  const prefix = [];

  let end = 0;

  while (true) {
    for (let i = 0; i < strs.length; i++) {
      if (end >= strs[i].length || strs[i][end] !== strs[0][end]) {
        return prefix.join("");
      }
    }

    prefix.push(strs[0][end]);
    end++;
  }
};
