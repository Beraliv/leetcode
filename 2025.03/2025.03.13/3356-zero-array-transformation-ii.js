/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  // Solution 1: Binary Search
  // Time: O(logQ * (N + Q)), Q - size of queries
  // Space: O(N)
  //   let start = 0,
  //     end = queries.length;
  //   if (!currentIndexZero(nums, queries, end)) {
  //     return -1;
  //   }
  //   while (start <= end) {
  //     let middle = (start + end) >> 1;
  //     if (currentIndexZero(nums, queries, middle)) {
  //       end = middle - 1;
  //     } else {
  //       start = middle + 1;
  //     }
  //   }
  //   return start;
  // Solution 2: 2 Pointers + Linear Sweeping
  // Time: O(N + Q), Q - size of queries
  // Space: O(N)
  let sum = 0,
    k = 0;
  let diff = Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    while (diff[i] + sum < nums[i]) {
      k++;

      if (k > queries.length) {
        return -1;
      }

      let left = queries[k - 1][0],
        right = queries[k - 1][1],
        value = queries[k - 1][2];

      if (right >= i) {
        diff[Math.max(left, i)] += value;
        diff[right + 1] -= value;
      }
    }

    sum += diff[i];
  }

  return k;
};

// nums = [2, 0, 2]
// diff = [2, 0, 0, -2]
// quer =[[0, 2, 1], [0, 2, 1], [1, 1, 3]]
// sum = 2, k = 2
// i = 2, left = 0, right = 2, value = 1

// Approach 1
// const currentIndexZero = (nums, queries, k) => {
//   let n = nums.length,
//     sum = 0;
//   const diff = Array(n + 1).fill(0);

//   for (let i = 0; i < k; i++) {
//     let l = queries[i][0],
//       r = queries[i][1],
//       v = queries[i][2];
//     diff[l] += v;
//     diff[r + 1] -= v;
//   }

//   for (let i = 0; i < n; i++) {
//     sum += diff[i];
//     if (sum < nums[i]) {
//       return false;
//     }
//   }

//   return true;
// };

console.log(
  minZeroArray(
    [2, 0, 2],
    [
      [0, 2, 1],
      [0, 2, 1],
      [1, 1, 3],
    ]
  )
); // 2
console.log(
  minZeroArray(
    [1, 2, 3, 4, 5],
    [
      [1, 3, 1],
      [0, 1, 2],
    ]
  )
); // -1
