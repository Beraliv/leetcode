import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function (nums, k, edges) {
  // Solution: XOR + Local Min/Max
  // Time: O(N)
  // Space: O(1)

  let sum = 0;
  let count = 0;
  let positiveMin = Infinity;
  let negativeMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let nodeValAfterOperation = nums[i] ^ k;
    let change = nodeValAfterOperation - nums[i];

    if (change > 0) {
      positiveMin = Math.min(positiveMin, change);
      sum += change;
      count++;
    } else {
      negativeMax = Math.max(negativeMax, change);
    }
  }

  if (count % 2 === 0) {
    return sum;
  }

  return Math.max(sum - positiveMin, sum + negativeMax);
};

console.log(
  maximumValueSum([1, 2, 1], 3, [
    [0, 1],
    [0, 2],
  ])
); // 6
console.log(maximumValueSum([2, 3], 7, [[0, 1]])); // 9
console.log(
  maximumValueSum([7, 7, 7, 7, 7, 7], 3, [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
  ])
); // 42
