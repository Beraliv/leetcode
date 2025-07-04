/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function (k, operations) {
  // Solution: Binary Search + Count
  // Time: O(logK)
  // Space: O(1)

  let n = Math.pow(2, operations.length);

  if (k > n) {
    return "?";
  }

  n = n / 2;
  let count = 0;

  for (let i = operations.length - 1; i >= 0; i--) {
    if (k === 1) {
      // ready to stop since operations won't be used anymore

      break;
    }

    if (n < k) {
      k -= n;
      count += operations[i];
    }

    n = n / 2;
  }

  return String.fromCharCode(97 + (count % 26));
};

console.log(kthCharacter(3, [0, 0, 0])); // 'a'
console.log(kthCharacter(10, [0, 1, 0, 1])); // 'b'

// aa
// aabb
// aabbaabb
// aabbaabbbbccbbcc
//  1       0

// index 10 = index 2 + 1 => index 1 + 1 => 1 => 'b'
// 8 => 4 => 2 => 1

console.log(kthCharacter(2, [1])); // 'b'

// a
// ab
//  0

// index 2 = index 1 + 1 = 1 => 'b'
// 1

console.log(kthCharacter(3, [1])); // '?'
