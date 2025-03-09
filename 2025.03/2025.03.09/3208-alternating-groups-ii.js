/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colours, k) {
  // Solution: Sliding Window + 1 pass
  // Time: O(N + K)
  // Space: O(1)

  const n = colours.length;

  if (n < k) {
    return 0;
  }

  let answer = 0,
    count = 1;
  for (let i = 1; i < n + k - 1; i++) {
    if (colours[(i - 1) % n] !== colours[i % n]) {
      count++;
    } else {
      if (count > k - 1) {
        answer += count - k + 1;
      }
      count = 1;
    }
  }

  if (count > k - 1) {
    answer += count - k + 1;
  }

  return answer;
};

console.log(numberOfAlternatingGroups([0, 1, 0, 1, 0], 3)); // 3
console.log(numberOfAlternatingGroups([0, 1, 0, 1, 0], 4)); // 2
console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1, 0, 1], 6)); // 2
console.log(numberOfAlternatingGroups([1, 1, 0, 1], 4)); // 0
console.log(numberOfAlternatingGroups([0, 0, 0], 3)); // 0
console.log(numberOfAlternatingGroups([0, 1, 0, 1], 3)); // 4
console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1], 3)); // 3
console.log(numberOfAlternatingGroups([1, 0, 0, 1, 0, 0], 3)); // 2

// 0 1 0 1 0 1 (n = 4 + k = 3 - 1 = 6)
