const swap = (list, i, j) => {
  let temp = list[i];
  list[i] = list[j];
  list[j] = temp;
};

const partition = (nums, left, right) => {
  let pivot = nums[right];
  let i = left;
  for (let j = left; j <= right; j++) {
    if (nums[j] < pivot) {
      swap(nums, i, j);
      i++;
    }
  }
  swap(nums, right, i);
  return i;
};

// partition([4, 1, 2], 0, 2)
// nums = [1, 2, 4], left = 0, right = 2
// pivot = 2, i = 1
// j = 2, nums[j] = 2
// return 1

const select = (nums, left, right, k) => {
  if (left === right) {
    return nums[left];
  }

  const pivot = partition(nums, left, right);

  if (k < pivot) {
    return select(nums, left, pivot - 1, k);
  }
  if (k > pivot) {
    return select(nums, pivot + 1, right, k);
  }
  return nums[k];
};

// select([4, 1, 2], 0, 2, 1)
// nums = [1, 2, 4], left = 0, right = 2, k = 1
// pivot = 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  // Solution 1. O(n * logn) time, O(1) space
  // nums.sort((a, b) => a - b);

  // let left = 0, right = nums.length - 1, sum = 0;

  // // steps_k = (k * countBefore_k) - sumBefore_k + sumAfter_k - (k * countAfter_k);
  // // d(steps_k) / dk = countBefore_K - countAfter_k = 0
  // // countBefore_k = countAfter_k (median)
  // // const median = nums[Math.floor(nums.length / 2)];

  // while (left < right) {
  //     sum += nums[right] - nums[left];
  //     left++;
  //     right--;
  // }

  // return sum;
  // Solution 2. average O(n) time (O(n ** 2) worst), O(1) space
  let sum = 0;
  let median = select(nums, 0, nums.length - 1, Math.floor(nums.length / 2));

  for (const num of nums) {
    sum += Math.abs(median - num);
  }
  return sum;
};

// [1, 2, 4]
// sum = 3
// median = 2
// num = 4
// return 3
