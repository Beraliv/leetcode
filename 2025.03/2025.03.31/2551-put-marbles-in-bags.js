// 1 3 4 2, 2
// (1) (3 4 2) => 1 + 1 + 3 + 2 = 7
// (1 3) (4 2) => 1 + 3 + 4 + 2 = 10
// (1 3 4) (2) => 1 + 4 + 2 + 2 = 9
// 10 - 7 = 3
// 4 7 6 => 4 6 7
// 7 - 4 = 3

// 1 3 4 2, 3
// 4 7 6 => 4 6 7
//

/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (weights, k) {
  // Solution: Splitting Points + Sorting + Greedy
  // Time: O(N * logN)
  // Space: O(N)

  const pairWeights = [];
  for (let i = 0; i < weights.length - 1; i++) {
    pairWeights.push(weights[i] + weights[i + 1]);
  }

  pairWeights.sort((a, b) => a - b);

  let answer = 0;
  for (let i = 0; i < k - 1; i++) {
    answer += pairWeights[weights.length - 1 - (i + 1)] - pairWeights[i];
  }
  return answer;
};

console.log(putMarbles([1, 3, 5, 1], 2)); // 4
console.log(putMarbles([1, 3], 2)); // 0
console.log(putMarbles([1, 3, 4, 2], 2)); // 3
console.log(putMarbles([1, 3, 4, 2], 3)); // 3
