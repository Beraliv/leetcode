/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  // Solution: DP + 2 Iterations + 2 pointers
  // Time: O(N ^ 2)
  // Space: O(N ^ 2)

  if (arr.length < 2) {
    return 0;
  }

  const n = arr.length;

  let dp = Array.from({ length: n }, () => Array(n).fill(0));
  let maxLength = 0;

  for (let i = 2; i < n; i++) {
    let start = 0,
      end = i - 1;

    while (start < end) {
      let sum = arr[start] + arr[end];

      if (sum > arr[i]) {
        end--;
      } else if (sum < arr[i]) {
        start++;
      } else {
        dp[end][i] = dp[start][end] + 1;
        maxLength = Math.max(maxLength, dp[end][i]);
        end--;
        start++;
      }
    }
  }

  return maxLength === 0 ? 0 : maxLength + 2;
};

console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8])); // 5
console.log(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18])); // 3
console.log(lenLongestFibSubseq([2, 3, 4, 7, 11])); // 4
console.log(
  lenLongestFibSubseq([2, 4, 5, 6, 7, 8, 11, 13, 14, 15, 21, 22, 34])
); // 5
