/**
 * @param {number} start
 * @param {number} finish
 * @param {number} limit
 * @param {string} s
 * @return {number}
 */
var numberOfPowerfulInt = function (start, finish, limit, s) {
  // Solution: Math
  // Time: O(logF), where F is the length of the number `finish`
  // Space: O(logF)

  const count = (num) => {
    const numString = num.toString();
    if (numString.length < s.length) {
      return 0;
    }
    if (numString.length === s.length) {
      return numString >= s ? 1 : 0;
    }
    const prefixLength = numString.length - s.length;
    const suffix = numString.substring(prefixLength);

    let count = 0;
    for (let i = 0; i < prefixLength; i++) {
      const digit = Number(numString[i]);
      if (limit < digit) {
        count += Math.pow(limit + 1, prefixLength - i);
        return count;
      }

      count += digit * Math.pow(limit + 1, prefixLength - i - 1);
    }
    if (suffix >= s) {
      count++;
    }

    return count;
  };

  return count(finish) - count(start - 1);
};

console.log(numberOfPowerfulInt(1, 6000, 4, "124")); // 5
console.log(numberOfPowerfulInt(15, 215, 6, "10")); // 2
