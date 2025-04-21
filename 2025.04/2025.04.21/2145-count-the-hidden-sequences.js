/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
  // Solution: Iteration + Interval Boundary Checking + Clamping
  // Time: O(N)
  // Space: O(1)

  let min = lower,
    max = upper;

  const clamp = (num) => {
    if (num < lower) return lower;
    if (num > upper) return upper;
    return num;
  };

  for (let i = 0; i < differences.length; i++) {
    min = min + differences[i];
    max = max + differences[i];
    if (min > upper || max < lower) {
      return 0;
    }
    min = clamp(min);
    max = clamp(max);
  }

  return max - min + 1;
};

console.log(numberOfArrays([1, -3, 4], 1, 6)); // 2
console.log(numberOfArrays([4, -7, 2], 3, 6)); // 0
console.log(numberOfArrays([0], 0, 0)); // 1
