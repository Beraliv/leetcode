/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  // Solution 1: Enumeration
  // Time: O(H - L), where H - high, L - low
  // Space: O(1)

  let count = 0;
  const twoDigitStart = Math.ceil(low / 11) * 11;
  for (let i = twoDigitStart; i <= Math.min(99, high); i += 11) {
    count++;
  }

  for (let i = Math.max(1000, low); i <= high; i++) {
    const a = Math.floor(i / 1000);
    const b = Math.floor((i % 1000) / 100);
    const c = Math.floor((i % 100) / 10);
    const d = i % 10;
    if (a + b === c + d) {
      count++;
    }
  }

  return count;
};

// 11, ..., 99 - 9
// 1001, 1010, 1102, 1111, 1120,

console.log(countSymmetricIntegers(1, 100)); // 9
console.log(countSymmetricIntegers(1200, 1230)); // 4
