/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function (data) {
  // Solution: Sliding Window
  // Time: O(N)
  // Space: O(1)

  let ones = 0;
  for (let i = 0; i < data.length; i++) {
    ones += data[i];
  }

  let zeros = 0;
  for (let i = 0; i < ones; i++) {
    if (data[i] === 0) {
      zeros++;
    }
  }

  let minSwaps = zeros;
  for (let i = ones; i < data.length; i++) {
    if (data[i] === 0) {
      zeros++;
    }
    if (data[i - ones] === 0) {
      zeros--;
    }
    minSwaps = Math.min(minSwaps, zeros);
  }

  return minSwaps;
};

console.log(minSwaps([0, 0, 0, 1, 0])); // 0
console.log(minSwaps([1, 0, 1, 0, 1])); // 1
console.log(minSwaps([1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1])); // 3
