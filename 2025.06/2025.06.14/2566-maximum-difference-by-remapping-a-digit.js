/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
  // Solution 1: Number Digit Manipulation
  // Time: O(D), where D is the number of digits in num
  // Space: O(D)

  //   const digits = [];
  //   while (num > 0) {
  //     digits.push(num % 10);
  //     num = Math.floor(num / 10);
  //   }
  //   for (let i = 0; i * 2 < digits.length; i++) {
  //     let temp = digits[i];
  //     digits[i] = digits[digits.length - 1 - i];
  //     digits[digits.length - 1 - i] = temp;
  //   }

  //   let minNumber = 0;
  //   for (let i = 0; i < digits.length; i++) {
  //     if (digits[i] === digits[0]) {
  //       minNumber = minNumber * 10;
  //     } else {
  //       minNumber = minNumber * 10 + digits[i];
  //     }
  //   }

  //   let maxNumber = 0,
  //     nonNineIndex = -1;
  //   for (let i = 0; i < digits.length; i++) {
  //     if (digits[i] !== 9 && nonNineIndex === -1) {
  //       nonNineIndex = i;
  //     }
  //     maxNumber =
  //       maxNumber * 10 + (digits[i] === digits[nonNineIndex] ? 9 : digits[i]);
  //   }

  //   return maxNumber - minNumber;

  // Solution 2: String Digit Manipulation
  // Time: O(D), where D is the number of digits in num
  // Space: O(D)

  const digits = String(num).split("");
  const minDigits = digits.map((digit) => (digit === digits[0] ? "0" : digit));
  let nonNineIndex = -1;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== "9") {
      nonNineIndex = i;
      break;
    }
  }
  const maxDigits = digits.map((digit) =>
    digit === digits[nonNineIndex] ? "9" : digit
  );

  const minNumber = parseInt(minDigits.join(""), 10);
  const maxNumber = parseInt(maxDigits.join(""), 10);

  return maxNumber - minNumber;
};

console.log(minMaxDifference(11891)); // 99009
console.log(minMaxDifference(90)); // 99
