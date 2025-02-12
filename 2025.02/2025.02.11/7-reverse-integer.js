const MIN_VALUE = -(2 ** 31);
const MAX_VALUE = 2 ** 31 - 1;

const canMultipleBy10 = (sign, n, digit) => {
  const overflows =
    (sign === 1 && (MAX_VALUE - digit) / 10 < n) ||
    (sign === -1 && (MIN_VALUE - digit) / 10 > -n);

  return !overflows;
};

/**
 * @param {number} n
 * @return {number}
 */
const reverse = (n) => {
  const sign = Math.sign(n);
  if (n < 0) {
    n *= -1;
  }

  let reversedN = 0;
  while (n > 0) {
    const digit = n % 10;

    if (!canMultipleBy10(sign, reversedN, digit)) {
      return 0;
    }

    reversedN = reversedN * 10 + digit;
    n = (n - digit) / 10;
  }

  return reversedN * sign;
};
