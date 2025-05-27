/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  // Solution: Modulo + Iteration
  // Time: O(N)
  // Space: O(1)

  //   let answer = 0;
  //   for (let i = 1; i <= n; i++) {
  //     if (i % m !== 0) {
  //       answer += i;
  //     } else {
  //       answer -= i;
  //     }
  //   }
  //   return answer;

  // Solution: 2 Arithmetic Progressions
  // Time: O(1)
  // Space: O(1)

  let times = Math.floor(n / m);
  return (n * (n + 1)) / 2 - m * times * (times + 1);
};

console.log(differenceOfSums(10, 3)); // 19
console.log(differenceOfSums(5, 6)); // 15
