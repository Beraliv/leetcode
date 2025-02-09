/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  // Solution 1: 2 Iterations: 1st for ones and 2nd for max
  // find max
  // Time: O(N)
  // Space: O(1)

  // if (s.length === 0) {
  //     return 0;
  // }

  // let ones = 0;
  // for (const ch of s) {
  //     if (ch === '1') {
  //         ones++;
  //     }
  // }

  // let zeros = 0, max = 0;
  // for (let i = 0; i < s.length - 1; i++) {
  //     if (s[i] === '1') {
  //         ones--
  //     } else {
  //         zeros++;
  //     }

  //     max = Math.max(max, ones + zeros);
  // }

  // return max;

  // Solution 2: 1 iteration
  // Time: O(N)
  // Space: O(1)

  if (s.length === 0) {
    return 0;
  }

  let zeros = 0,
    ones = 0,
    best = -Infinity;

  // non-empty substrings, therefore N - 1
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "1") {
      ones++;
    } else {
      zeros++;
    }

    best = Math.max(best, zeros - ones);
  }

  if (s[s.length - 1] === "1") {
    ones++;
  }

  return ones + best;
};

// s = 011101
// zeros = [1, 1, 1, 1, 2, 2], ones = [4, 4, 3, 2, 1, 1]
// i = 0
// max = 5
// i = 0, 1 + 4 = 5
// i = 1, 1 + 3 = 4
// i = 2, 1 + 2 = 3
// i = 3, 1 + 1 = 2
// i = 4, 2 + 1 = 3
// return 5
