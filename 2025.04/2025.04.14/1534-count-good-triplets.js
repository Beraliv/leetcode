/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  // Solution 1: Enumeration
  // Time: O(N ^ 3)
  // Space: O(1)

  //   let count = 0;
  //   for (let i = 0; i < arr.length - 2; i++) {
  //     for (let j = i + 1; j < arr.length - 1; j++) {
  //       for (let k = j + 1; k < arr.length; k++) {
  //         if (
  //           i !== j &&
  //           j !== k &&
  //           Math.abs(arr[i] - arr[j]) <= a &&
  //           Math.abs(arr[j] - arr[k]) <= b &&
  //           Math.abs(arr[k] - arr[i]) <= c
  //         ) {
  //           count++;
  //         }
  //       }
  //     }
  //   }
  //   return count;

  // Solution 2: Optimised Enumeration
  // Time: O(N ^ 2)
  // Space: O(1)

  const freq = Array(1001).fill(0);
  let count = 0;

  for (let j = 0; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      if (Math.abs(arr[j] - arr[k]) <= b) {
        let lj = arr[j] - a;
        let rj = arr[j] + a;
        let lk = arr[k] - c;
        let rk = arr[k] + c;
        let left = Math.max(0, Math.max(lj, lk));
        let right = Math.min(1000, Math.min(rj, rk));
        if (left <= right) {
          if (left === 0) {
            count += freq[right];
          } else {
            count += freq[right] - freq[left - 1];
          }
        }
      }
    }
    for (let k = arr[j]; k <= 1000; k++) {
      freq[k]++;
    }
  }

  return count;
};

console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)); // 4
console.log(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1)); // 0
