/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length < 1) {
    return "";
  }

  let common = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;

    while (j < Math.min(common.length, strs[i].length)) {
      if (strs[i][j] === common[j]) {
        j++;
      } else {
        break;
      }
    }

    if (j === 0) {
      return "";
    }

    common = strs[i].slice(0, j);
  }

  return common;
};
