const encrypt = (num) => {
  const str = `${num}`;
  const digits = str.split("").map((digit) => parseInt(digit));
  const largestDigit = Math.max(...digits);
  let encrypted = 0;
  for (let i = 0; i < digits.length; i++) {
    encrypted = encrypted * 10 + largestDigit;
  }
  return encrypted;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
  let sum = 0;
  for (const num of nums) {
    sum += encrypt(num);
  }
  return sum;
};
