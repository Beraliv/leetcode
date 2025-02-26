const isDigit = (ch) => "0" <= ch && ch <= "9";
const isOperator = (ch) => ["+", "-", "*", "/"].includes(ch);

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
  // Solution: Meta version (don't have multiplication)
  // Time: O(2 ^ N)
  // Space: O(N)
  //   if (num.length === 0) {
  //     return [];
  //   }
  //   const combinations = [];
  //   const backtracking = (index, curr, number, combination) => {
  //     if (index >= num.length) {
  //       if (curr + number === target) {
  //         combinations.push([...combination, "+", number].join(""));
  //       }
  //       return;
  //     }
  //     backtracking(
  //       index + 1,
  //       curr,
  //       number * 10 + Number(num[index]),
  //       combination
  //     );
  //     if (combination.length > 0) {
  //       combination.push("+");
  //     }
  //     combination.push(number);
  //     backtracking(index + 1, curr + number, Number(num[index]), combination);
  //     combination.pop();
  //     if (combination.length > 0) {
  //       combination.pop();
  //     }
  //   };
  //   backtracking(1, 0, Number(num[0]), []);
  //   return combinations;

  // Solution 2: Backtrack + Previous/Current + In-place calculation (value)
  // Time: O(N * 4 ^ N)
  // Space: O(N)

  const combinations = [];

  if (num.length === 0) {
    return combinations;
  }

  const backtrack = (index, previous, current, value, combination) => {
    if (index >= num.length) {
      console.log(previous, current, value);
      if (value === target && current === 0) {
        combinations.push(combination.join(""));
      }
      return;
    }

    current = current * 10 + Number(num[index]);
    if (current > 0) {
      backtrack(index + 1, previous, current, value, combination);
    }

    if (combination.length > 0) {
      combination.push("+");
    }
    combination.push(current);
    backtrack(index + 1, current, 0, value + current, combination);
    combination.pop();
    combination.pop();

    if (combination.length > 0) {
      combination.push("-");
      combination.push(current);
      backtrack(index + 1, -current, 0, value - current, combination);
      combination.pop();
      combination.pop();

      combination.push("*");
      combination.push(current);
      backtrack(
        index + 1,
        current * previous,
        0,
        value - previous + current * previous,
        combination
      );
      combination.pop();
      combination.pop();
    }
  };

  backtrack(0, 0, 0, 0, []);

  return combinations;
};

console.log(addOperators("232", 25)); // 23+2
// console.log(addOperators("123", 6)); // 1+2+3
