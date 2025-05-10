const getSumAndZeros = (nums) => {
  let sum = 0,
    zeros = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      sum += nums[i];
    } else {
      zeros++;
    }
  }

  return [sum, zeros];
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function (nums1, nums2) {
  // Solution: Count + Zeros
  // Time: O(N)
  // Space: O(1)

  const [sum1, zeros1] = getSumAndZeros(nums1);
  const [sum2, zeros2] = getSumAndZeros(nums2);

  if (zeros1 > 0 && zeros2 > 0) {
    return Math.max(sum1 + zeros1, sum2 + zeros2);
  }

  if (zeros1 === 0 && zeros2 > 0) {
    if (sum1 < sum2 + zeros2) {
      return -1;
    }

    return Math.max(sum1, sum2 + zeros2);
  }

  if (zeros2 === 0 && zeros1 > 0) {
    if (sum2 < sum1 + zeros1) {
      return -1;
    }

    return Math.max(sum2, sum1 + zeros1);
  }

  if (sum1 === sum2) {
    return sum1;
  }

  return -1;
};

console.log(minSum([3, 2, 0, 1, 0], [6, 5, 0])); // 12
console.log(minSum([2, 0, 2, 0], [1, 4])); // -1
