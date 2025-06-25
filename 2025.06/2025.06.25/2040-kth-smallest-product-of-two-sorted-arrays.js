const countLteTo = (nums2, num1, value) => {
  let left = 0,
    right = nums2.length - 1;

  // to minimise a number of comparisons in the loop
  // positive and negative scenarios are handled separately

  if (num1 >= 0) {
    while (left <= right) {
      const mid = (left + right) >> 1;
      const product = num1 * nums2[mid];

      if (product <= value) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return left;
  }

  while (left <= right) {
    const mid = (left + right) >> 1;
    const product = num1 * nums2[mid];

    if (product > value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return nums2.length - left;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function (nums1, nums2, k) {
  // Solution: 2 Binary Searches
  // Time: O(M * logN), where M is the length of nums1 and N is the length of nums2
  // Space: O(1)

  if (nums1.length * nums2.length < k) {
    return -1; // Not enough products
  }

  let left = -1e10,
    right = 1e10;

  while (left <= right) {
    // to prevent overflow, as left and right can be too large (e.g. -1e10 or 1e10)
    const mid = Math.floor((left + right) / 2);

    let count = 0;
    for (let i = 0; i < nums1.length; i++) {
      count += countLteTo(nums2, nums1[i], mid);
    }

    if (count < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

console.log(kthSmallestProduct([2, 5], [3, 4], 2)); // 8
console.log(kthSmallestProduct([-4, -2, 0, 3], [2, 4], 4)); // -4
console.log(kthSmallestProduct([-4, -2, 0, 3], [2, 4], 6)); // 0
console.log(kthSmallestProduct([-2, -1, 0, 1, 2], [-3, -1, 2, 4, 5], 3)); // -6
console.log(kthSmallestProduct([-100000, 100000], [-100000, 100000], 1)); // -10000000000
