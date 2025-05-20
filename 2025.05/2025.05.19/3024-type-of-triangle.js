/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
  if (nums.length !== 3) {
    return "none";
  }

  const [a, b, c] = nums;
  if (a === b && b === c) {
    return "equilateral";
  }

  let sum = a + b + c;
  if (nums.some((value) => value >= sum - value)) {
    return "none";
  }
  if (a === b || a === c || b === c) {
    return "isosceles";
  }
  return "scalene";
};
