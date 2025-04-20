/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  // Solution: HashMap + Smart Count
  // Time: O(N)
  // Space: O(N)

  const countMap = {};
  let count = 0;
  for (const value of answers) {
    if (countMap[value] === undefined) {
      countMap[value] = 1;
    } else {
      countMap[value]++;
    }

    if (countMap[value] === value + 1) {
      count += value + 1;
      countMap[value] = 0;
    }
  }
  for (const key in countMap) {
    if (countMap[key] > 0) {
      count += parseInt(key) + 1;
    }
  }
  return count;
};

console.log(numRabbits([1, 1, 2])); // 5
console.log(numRabbits([10, 10, 10])); // 11
console.log(numRabbits([1, 1, 1, 1, 2])); // 7
console.log(numRabbits([1, 0, 1, 0, 0])); // 5
