/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  // Solution 1. O(N) time, O(1) space
  // let i = 0;
  // let value = 1;
  // while (k > 0) {
  //     if (value === arr[i]) {
  //         if (i < arr.length - 1) {
  //             i++;
  //         }
  //     } else {
  //         k--;
  //     }
  //     value++;
  // }
  // return value - 1;
  // Solution 2. O(logN) time, O(1) space
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const middle = (left + right) >> 1;

    if (arr[middle] - middle - 1 < k) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  // for right the number of missing integers: arr[right] - right - 1
  // arr[right] + k - (arr[right] - right - 1) = right + 1 + k = left + k

  return left + k;
};

// [1, 2, 3]
// [2, 3, 6], k = 2
// left = 2, right = 1
// middle = 1, 3 - 1 - 1 = 1 < 2
// middle = 2, 6 - 2 - 1 = 3 < 2
