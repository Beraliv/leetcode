/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  // Solution 1: Backtrack
  // Time: O(2^N)
  // Space: O(N)

  //   let sum = 0;

  //   const backtrack = (index, xor) => {
  //     if (index === nums.length) {
  //       sum += xor;
  //       return;
  //     }

  //     backtrack(index + 1, xor ^ nums[index]);

  //     backtrack(index + 1, xor);
  //   };

  //   backtrack(0, 0);

  //   return sum;

  // Solution 2: Bits Manipulation
  // Time: O(N)
  // Space: O(1)

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result |= nums[i];
  }

  return result << (nums.length - 1);
};

console.log(subsetXORSum([1, 3])); // 6
console.log(subsetXORSum([5, 1, 6])); // 28
console.log(subsetXORSum([3, 4, 5, 6, 7, 8])); // 480
