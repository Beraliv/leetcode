// O(N) time, O(1) space
const reverseInPlace = (array) => {
  let i = 0;

  while (i <= array.length - 1 - i) {
    swap(array, i, array.length - 1 - i);
    i++;
  }
};

// O(N) time, O(N) space
const numberToDigits = (num) => {
  const digits = [];

  let rest = num;
  while (rest > 0) {
    const remainder = rest % 10;
    digits.push(remainder);
    rest = (rest - remainder) / 10;
  }

  reverseInPlace(digits);

  return digits;
};

// O(N) time, O(1) space
const findMaximumSwapIndices = (digits) => {
  let max = -Infinity;
  let maxIndex = -1;
  let leftIndex = -1;
  let rightIndex = -1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const digit = digits[i];

    if (digit > max) {
      max = digit;
      maxIndex = i;
    } else if (digit < max) {
      leftIndex = i;
      rightIndex = maxIndex;
    }
  }

  return [leftIndex, rightIndex];
};

// O(1) time, O(1) space
const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

// O(N) time, O(1) space
const digitsToNumber = (digits) => {
  let num = 0;
  for (const digit of digits) {
    num = num * 10 + digit;
  }
  return num;
};

/**
 * O(N) time, O(N) space
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const digits = numberToDigits(num);
  const [leftIndex, rightIndex] = findMaximumSwapIndices(digits);
  if (leftIndex === -1) {
    return num;
  }

  swap(digits, leftIndex, rightIndex);

  return digitsToNumber(digits);
};
