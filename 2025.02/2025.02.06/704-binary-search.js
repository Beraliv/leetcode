/**
 * 2min
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search1 = function (nums, target) {
  // Approach 1. Search
  // Time: O(logN)
  // Space: O(1)
  // let left = 0,
  //   right = nums.length - 1;

  // while (left <= right) {
  //   const middle = (left + right) >> 1;
  //   if (nums[middle] > target) {
  //     right = middle - 1;
  //   } else if (nums[middle] < target) {
  //     left = middle + 1;
  //   } else {
  //     return middle;
  //   }
  // }

  // return -1;

  // Approach 2. Upper bound
  // let left = 0,
  //   right = nums.length;

  // while (left < right) {
  //   const middle = (left + right) >> 1;

  //   if (nums[middle] > target) {
  //     right = middle;
  //   } else {
  //     left = middle + 1;
  //   }
  // }

  // if (left > 0 && nums[left - 1] === target) {
  //   return left - 1;
  // }

  // return -1;

  // Approach 3. Lower bound
  let left = 0,
    right = nums.length;

  while (left < right) {
    const middle = (left + right) >> 1;

    if (nums[middle] >= target) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  if (left < nums.length && nums[left] === target) {
    return left;
  }

  return -1;
};

// To train lower bound, value, upper bound versions below

const search = (nums, target) => {
  let left = 0,
    right = nums.length;

  while (left < right) {
    const middle = (left + right) >> 1;

    if (nums[middle] >= target) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  if (left < nums.length && nums[left] === target) {
    return left;
  }

  return -1;
};

console.log(search([1, 2, 3], 1)); // 0
console.log(search([1, 2, 3], 2)); // 1
console.log(search([1, 2, 3], 3)); // 2
console.log(search([1, 2, 3], 4)); // -1
