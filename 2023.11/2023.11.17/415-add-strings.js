const convertStringToDigits = (str) => {
  const digits = [];

  for (let i = str.length - 1; i >= 0; i--) {
    digits.push(str[i]);
  }

  return digits;
};

const addDigit = (a = "0", b = "0") => `${Number(a) + Number(b)}`;

const convertDigitsToString = (digits) => {
  return digits.reverse().join("");
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addStrings = function (a, b) {
  const aDigits = convertStringToDigits(a);
  const bDigits = convertStringToDigits(b);

  const result = [];
  const maxLen = Math.max(aDigits.length, bDigits.length);

  let overflow = "0";
  for (let i = 0; i < maxLen; i++) {
    const sum = addDigit(addDigit(aDigits[i], bDigits[i]), overflow);
    overflow = sum.length > 1 ? sum[0] : "0";
    const remainder = sum[sum.length - 1];
    result.push(remainder);
  }

  if (overflow !== "0") {
    result.push(overflow);
  }

  return convertDigitsToString(result);
};
