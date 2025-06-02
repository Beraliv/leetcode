/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  // Solution: Greedy
  // Time: O(N)
  // Space: O(1)

  let n = ratings.length,
    candy = n,
    index = 1;
  while (index < n) {
    if (ratings[index] === ratings[index - 1]) {
      index++;
      continue;
    }

    let increasing = 0;
    while (ratings[index - 1] < ratings[index]) {
      increasing++;
      candy += increasing;
      index++;
      if (index >= n) {
        return candy;
      }
    }

    let decreasing = 0;
    while (index < n && ratings[index - 1] > ratings[index]) {
      decreasing++;
      candy += decreasing;
      index++;
    }

    candy -= Math.min(increasing, decreasing);
  }

  return candy;
};

//      3
//         2
//   2 (count = 1, last = 1) => (count = 1, last = 2)
// 1

console.log(candy([1, 0, 2])); // 5
console.log(candy([1, 2, 2])); // 4

//   4
//    3
//     2
// 1    1 (11)

//
//
//   2  2
// 1  1  1 (7)

console.log(candy([1, 3, 2, 2, 1])); // 7

//     3   3
//   2       2
// 1     1     1 (13)

console.log(candy([1, 2, 87, 87, 87, 2, 1])); // 13

//       4
//     3
//   2
// 1        1

console.log(candy([1, 3, 4, 5, 2])); // 11
