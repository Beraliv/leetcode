const countSteps = (n, curr, next) => {
  let steps = 0;
  while (curr <= n) {
    steps += Math.min(n + 1, next) - curr;
    curr *= 10;
    next *= 10;
  }
  return steps;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  // Solution: Trie
  // Time: O(logN * logN)
  // Space: O(1)

  let number = 1;
  k--;
  while (k > 0) {
    let steps = countSteps(n, number, number + 1);
    if (steps <= k) {
      number++;
      k -= steps;
    } else {
      number *= 10;
      k--;
    }
  }
  return number;
};

console.log(findKthNumber(13, 2)); // 10
console.log(findKthNumber(1, 1)); // 1
console.log(findKthNumber(719885387, 209989719)); // 288990744
