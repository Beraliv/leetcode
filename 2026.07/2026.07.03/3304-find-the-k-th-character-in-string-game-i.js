/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
  // Solution: Binary Search + Count
  // Time: O(logN)
  // Space: O(1)

  let n = 256;
  let count = 0;

  while (k > 1) {
    if (n < k) {
      k -= n;
      count++;
    }

    n = n / 2;
  }

  count = count % 26;
  return String.fromCharCode(97 + count);
};

// a
// ab
// abbc
//  ^ +1
// abbcbccd
//      ^

// index 4 => index 2 + 1 => index 1 + 2 => c
// index 5 => index 1 + 1 => b
// index 6 => index 2 + 1 => index 1 + 2 => c

console.log(kthCharacter(1)); // a
console.log(kthCharacter(2)); // b
console.log(kthCharacter(3)); // b
console.log(kthCharacter(4)); // c
console.log(kthCharacter(5)); // b
console.log(kthCharacter(6)); // c
console.log(kthCharacter(7)); // c
console.log(kthCharacter(8)); // d
