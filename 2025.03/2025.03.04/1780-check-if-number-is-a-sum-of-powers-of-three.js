/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  // Solution 1: Optimised iterative approach
  // Time: O(log3(N))
  // Space: O(1)
  //   let powOf3 = 1;
  //   while (powOf3 * 3 <= n) {
  //     powOf3 = powOf3 * 3;
  //   }

  //   while (n > 0 && powOf3 > 0) {
  //     if (n >= powOf3) {
  //       n -= powOf3;
  //     }
  //     if (powOf3 > 1) {
  //       powOf3 = powOf3 / 3;
  //     } else {
  //       powOf3--;
  //     }
  //   }

  //   return n === 0;

  // Solution: Ternary representation
  // Time: O(log3(N))
  // Space: O(1)

  while (n > 0) {
    let bit = n % 3;
    if (bit === 2) {
      return false;
    }

    n = (n - bit) / 3;
  }

  return true;
};

for (let v = 1; v < 22; v++) {
  console.log(`${v} is sum of powers of 3: ${checkPowersOfThree(v)}`);
}
