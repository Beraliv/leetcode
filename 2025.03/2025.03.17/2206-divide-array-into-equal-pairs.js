/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  // Bits Manipulation won't work since [1,2,4,7] is false
  // 001, 010, 100, 111

  // Solution: HashSet
  // Time: O(N)
  // Space: O(N)

  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }

  return set.size === 0;
};

console.log(divideArray([1, 2, 3, 4])); // false
console.log(divideArray([3, 2, 3, 2, 2, 2])); // true
console.log(
  divideArray([
    9, 9, 19, 10, 9, 12, 2, 12, 3, 3, 11, 5, 8, 4, 13, 6, 2, 11, 9, 19, 11, 15,
    9, 17, 15, 12, 5, 14, 12, 16, 18, 16, 10, 3, 8, 9, 16, 20, 2, 4, 16, 12, 11,
    14, 20, 16, 2, 18, 17, 20, 3, 13, 16, 17, 1, 1, 11, 20, 20, 4,
  ])
); // false
