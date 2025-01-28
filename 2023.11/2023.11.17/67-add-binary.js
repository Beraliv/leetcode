const ADD_DICTIONARY = {
  0: {
    0: "0",
    1: "1",
  },
  1: {
    0: "1",
    1: "10",
  },
  10: {
    0: "10",
    1: "11",
  },
};

const addDigit = (a = "0", b = "0") => {
  return ADD_DICTIONARY[a][b];
};

const convertDigitsToString = (digits) => {
  return digits.reverse().join("");
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const maxLen = Math.max(a.length, b.length);
  if (a.length === maxLen) {
    b = b.padStart(maxLen, "0");
  } else {
    a = a.padStart(maxLen, "0");
  }

  const sumDigits = [];
  let overflow = "0";

  for (let i = maxLen - 1; i >= 0; i--) {
    const sum = addDigit(addDigit(a[i], b[i]), overflow);
    overflow = sum.length > 1 ? sum[0] : "0";
    const remainder = sum[sum.length - 1];
    sumDigits.push(remainder);
  }

  if (overflow === "1") {
    sumDigits.push(overflow);
  }

  return convertDigitsToString(sumDigits);
};
