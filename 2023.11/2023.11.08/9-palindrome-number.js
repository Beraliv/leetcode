/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (n) {
  let temp = n;
  let reversedN = 0;
  while (temp > 0) {
    let remainder = temp % 10;
    reversedN = reversedN * 10 + remainder;
    temp = (temp - remainder) / 10;
  }

  return reversedN === n;
};
