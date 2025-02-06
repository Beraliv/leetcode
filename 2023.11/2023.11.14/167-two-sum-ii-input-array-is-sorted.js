/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let start = 0,
    end = numbers.length - 1;

  while (start < end) {
    const sum = numbers[start] + numbers[end];

    if (sum > target) {
      end--;
    } else if (sum < target) {
      start++;
    } else {
      return [start + 1, end + 1];
    }
  }
};
