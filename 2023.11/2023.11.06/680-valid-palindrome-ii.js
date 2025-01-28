// 8min
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;

  const validPalindromeAfterDelete = function (i, j) {
    while (i < j) {
      if (s[i] !== s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  };

  while (i < j) {
    if (s[i] !== s[j]) {
      return (
        validPalindromeAfterDelete(i + 1, j) ||
        validPalindromeAfterDelete(i, j - 1)
      );
    }
    i++;
    j--;
  }

  return true;
};
