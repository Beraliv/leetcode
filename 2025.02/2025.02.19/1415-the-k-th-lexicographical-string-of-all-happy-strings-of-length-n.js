/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  // Solution 1: Backtracking + Store all combination
  // Time: 3 * 2 ^ (N - 1), which is O(2 ^ N), sorting required O(N * 2 ^ N)
  // Space: O(N * 2 ^ N)
  //   const combinations = [];
  //   const characters = ["a", "b", "c"];
  //   const backtrack = (current) => {
  //     if (current.length > n) {
  //       return;
  //     }
  //     if (current.length === n) {
  //       combinations.push(current.join(""));
  //       return;
  //     }
  //     for (let ch of characters) {
  //       if (current.length === 0 || current.at(-1) !== ch) {
  //         current.push(ch);
  //         backtrack(current);
  //         current.pop();
  //       }
  //     }
  //   };
  //   backtrack([]);
  //   if (combinations.length < k) {
  //     return "";
  //   }
  //   combinations.sort();
  //   return combinations[k - 1];
  // Solution 2: Backtracking + Index
  // Time: O(N * 2 ^ N)
  // Space: O(N)
  //   const characters = ["a", "b", "c"];
  //   let index = 0;
  //   let result = "";
  //   const backtrack = (current) => {
  //     if (result) {
  //       return;
  //     }
  //     if (current.length > n) {
  //       return;
  //     }
  //     if (current.length === n) {
  //       if (index === k - 1) {
  //         result = current.join("");
  //       }
  //       index++;
  //       return;
  //     }
  //     for (let ch of characters) {
  //       if (current.length === 0 || current.at(-1) !== ch) {
  //         current.push(ch);
  //         backtrack(current);
  //         current.pop();
  //       }
  //     }
  //   };
  //   backtrack([]);
  //   return result;
  // Solution 3: Combinatorics
  // Time: O(N)
  // Space: O(1)

  const count = 3 * (1 << (n - 1));
  if (count < k) {
    return "";
  }

  const answer = [];
  const characters = ["a", "b", "c"];
  const nextSmallest = { a: "b", b: "a", c: "a" };
  const nextGreatest = { a: "c", b: "c", c: "b" };

  let left = k - 1;
  let base = count / 3;
  let nextLeft = left % base;
  answer.push(characters[(left - nextLeft) / base]);
  left = nextLeft;

  for (let i = 1; i < n; i++) {
    base = base / 2;
    if (left < base) {
      answer.push(nextSmallest[answer.at(-1)]);
    } else {
      answer.push(nextGreatest[answer.at(-1)]);
    }
    left = left % base;
  }

  return answer.join("");
};

console.log(getHappyString(1, 3)); // 'c'
console.log(getHappyString(1, 4)); // ''
console.log(getHappyString(3, 8)); // 'bcb'
console.log(getHappyString(3, 9)); // 'cab'
console.log(getHappyString(3, 12)); // 'cbc'
// count = 12, curr = 4, left = 0, indices = [2]
// nextLeft = 8 % 4 = 0, index = (8 - 0) / 4 = 2

// 1 = aba
// 2 = abc
// 3 = aca
// 4 = acb

// 5 = bab
// 6 = bac
// 7 = bca
// 8 = bcb

// 9 = cab
// 10= cac
// 11= cba
// 12= cbc
