/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  // Solution: Backtracking + HashSet (visited)
  // Time: O(9 ^ N)
  // Space: O(N)
  //   const visited = new Set();
  //   let minNumber;
  //   const backtrack = (index, answer) => {
  //     if (index > pattern.length) {
  //       return;
  //     }
  //     if (minNumber && index >= 0 && answer[index] > minNumber[index]) {
  //       return;
  //     }
  //     if (index === pattern.length) {
  //       minNumber = answer.join("");
  //       return;
  //     }
  //     for (let digit = 1; digit <= 9; digit++) {
  //       if (visited.has(digit)) continue;
  //       if (
  //         answer.length === 0 ||
  //         (pattern[index] === "I" && answer.at(-1) < digit) ||
  //         (pattern[index] === "D" && answer.at(-1) > digit)
  //       ) {
  //         visited.add(digit);
  //         answer.push(digit);
  //         backtrack(index + 1, answer);
  //         answer.pop();
  //         visited.delete(digit);
  //       }
  //     }
  //   };
  //   backtrack(-1, []);
  //   return minNumber;

  // Solution 2: Stack + Pop all digits when meeting I
  // Time: O(N)
  // Space: O(N)

  const answer = [];
  const stack = [];

  for (let i = 0; i <= pattern.length; i++) {
    stack.push(i + 1);

    if (i === pattern.length || pattern[i] === "I") {
      while (stack.length) {
        answer.push(stack.pop());
      }
    }
  }

  return answer.join("");
};

// answer = [1, 2, 3, 5, 4, 9, 8, 7, 6], stack = [], pattern = 'IIIDIDDD'
// "123549876"

// console.log(smallestNumber("IIIDIDDD")); // 123549876
// console.log(smallestNumber("DDDIII")); // 4321567
