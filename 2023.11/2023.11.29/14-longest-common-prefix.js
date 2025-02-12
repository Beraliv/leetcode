/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length < 1) {
    return "";
  }

  let start = 0,
    end = 0;

  while (true) {
    if (end >= strs[0].length) {
      return strs[0].substring(start, end);
    }

    for (let i = 1; i < strs.length; i++) {
      if (end >= strs[i].length || strs[i][end] !== strs[0][end]) {
        return strs[0].substring(start, end);
      }
    }

    end++;
  }
};
