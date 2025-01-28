let isDigit = (ch: string) => /\d/.test(ch);

const MAX_INT_DIV_BY_10 = 214748364;
const MAX_INT = 2147483647;
const MIN_INT = -2147483648;

function canMultiplyWithoutOverflow(
  num: number,
  sign: number,
  digit: number
): boolean {
  if (num > MAX_INT_DIV_BY_10) {
    return false;
  }

  if (num === MAX_INT_DIV_BY_10) {
    if (sign === 1) {
      return digit < 8;
    } else if (sign === -1) {
      return digit < 9;
    }
  }

  return true;
}

// 28m
function myAtoi(s: string): number {
  let startIndex = 0;
  while (startIndex < s.length && s[startIndex] === " ") {
    startIndex++;
  }

  let sign = 1;

  if (s[startIndex] === "-") {
    sign = -1;
    startIndex++;
  } else if (s[startIndex] === "+") {
    startIndex++;
  }

  let endIndex = startIndex;
  while (endIndex < s.length && isDigit(s[endIndex])) {
    endIndex++;
  }

  let num = 0;
  let index = startIndex;
  while (index < endIndex) {
    const digit = Number(s[index]);

    if (canMultiplyWithoutOverflow(num, sign, digit)) {
      num = num * 10 + digit;
    } else {
      if (sign === 1) {
        return MAX_INT;
      }
      return MIN_INT;
    }

    index++;
  }

  return sign * num;
}
