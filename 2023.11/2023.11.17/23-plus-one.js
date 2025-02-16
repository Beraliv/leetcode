/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let index = digits.length - 1;
  while (index >= 0) {
    if (digits[index] === 9) {
      digits[index--] = 0;
    } else {
      digits[index]++;
      return digits;
    }
  }

  digits.unshift(1);

  return digits;
};
