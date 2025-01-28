/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  // O(9! * K / (9 - K)!) time, O(K) space
  const combinations = [];

  const backtrack = (combination, startDigit, rest) => {
    if (combination.length === k) {
      if (rest === 0) {
        combinations.push(combination.slice());
      }
      return;
    }

    for (let digit = startDigit; digit <= 9; digit++) {
      if (rest - digit >= 0) {
        combination.push(digit);
        backtrack(combination, digit + 1, rest - digit);
        combination.pop();
      }
    }
  };

  backtrack([], 1, n);

  return combinations;
};
