/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  // Solution: Iteration + HashMap
  // Time: O(N * logN)
  // Space: O(logN)

  const obj = {};
  let maxCount = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let left = i;
    while (left > 0) {
      let digit = left % 10;
      sum += digit;
      left = (left - digit) / 10;
    }

    if (sum in obj) {
      obj[sum]++;
    } else {
      obj[sum] = 1;
    }
    maxCount = Math.max(maxCount, obj[sum]);
  }
  let count = 0;
  for (let key in obj) {
    if (obj[key] === maxCount) {
      count++;
    }
  }

  return count;
};

console.log(countLargestGroup(13)); // 4
console.log(countLargestGroup(2)); // 2
