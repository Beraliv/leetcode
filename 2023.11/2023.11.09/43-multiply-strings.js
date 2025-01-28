// '123456' * '789'
// 6 * 789
// 6 * 9 + 6 * 80 + 6 * 700
// [6, 5, 4, 3, 2, 1]
// [9, 8, 7]
// [9] * [6] + addBase([9] * [5], 1) + addBase([9] * [4], 2) + ...

const addDigit = (digit1, digit2) => `${Number(digit1) + Number(digit2)}`;

const add = (digits1, digits2) => {
  const maxLength = Math.max(digits1.length, digits2.length);

  const sumDigits = Array(maxLength).fill("");

  let overflow = "0";
  for (let i = 0; i < maxLength; i++) {
    const sum = addDigit(
      addDigit(digits1[i] || "0", digits2[i] || "0"),
      overflow
    );
    const remainder = sum[sum.length - 1];
    sumDigits[i] = remainder;
    overflow = sum.length > 1 ? "1" : "0";
  }

  if (overflow === "1") {
    sumDigits.push("1");
  }

  return sumDigits;
};

const multDigit = (digit1, digit2) => {
  const product = `${Number(digit1) * Number(digit2)}`;
  if (product.length === 2) {
    return [product[1], product[0]];
  }
  return [product[0]];
};

const addBase = (digits, base) => {
  if (digits.length === 1 && digits[0] === "0") {
    return digits;
  }
  const newLength = digits.length + base;
  const arr = Array(newLength).fill("");
  for (let i = 0; i < base; i++) {
    arr[i] = "0";
  }
  let k = 0;
  for (let i = base; i < newLength; i++) {
    arr[i] = digits[k++];
  }
  return arr;
};

const mult = (digits1, digits2) => {
  let sum = ["0"];

  for (let i = 0; i < digits1.length; i++) {
    const digit1 = digits1[i];

    for (let j = 0; j < digits2.length; j++) {
      const digit2 = digits2[j];

      const product = multDigit(digit1, digit2);
      sum = add(sum, addBase(product, i + j));
    }
  }

  return sum;
};

const convertNumToDigits = (num) => {
  const digits = [];

  for (let i = num.length - 1; i >= 0; i--) {
    digits.push(num[i]);
  }

  return digits;
};

const convertDigitsToNum = (digits) => {
  return digits.reverse().join("");
};

/**
 * 31m - fail
 * 45m - passed but slow
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  // O(N) time
  const digits1 = convertNumToDigits(num1);
  // O(N) time
  const digits2 = convertNumToDigits(num2);

  const multDigits = mult(digits1, digits2);

  return convertDigitsToNum(multDigits);
};
