const isLetter = (ch) => /[a-z0-9]/i.test(ch);

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Solution: 2 pointers
  // Time: O(S)
  // Space: O(1)

  let i = 0,
    j = s.length - 1;

  while (i <= j) {
    while (!isLetter(s[i])) {
      i++;
    }
    while (!isLetter(s[j])) {
      j--;
    }
    if (i <= j && s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
