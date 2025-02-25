const isDigit = (ch) => "0" <= ch && ch <= "9";

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // Solution: Stack + 1 Iteration
  // Time: O(N)
  // Space: O(B), where B is a number of opening brackets, O(N) at the worst scenario

  const stack = [];
  let operand = 0,
    result = 0,
    sign = 1;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (isDigit(ch)) {
      operand = operand * 10 + Number(ch);
    } else if (ch === "+") {
      result += sign * operand;
      sign = 1;
      operand = 0;
    } else if (ch === "-") {
      result += sign * operand;
      sign = -1;
      operand = 0;
    } else if (ch === "(") {
      stack.push(result, sign);
      sign = 1;
      result = 0;
    } else if (ch === ")") {
      result += sign * operand;
      result *= stack.pop(); // sign
      result += stack.pop(); // operand
      operand = 0;
    }
  }

  return result + sign * operand;
};

console.log(calculate("0")); // 0
console.log(calculate("1 + 2")); // 3
console.log(calculate("1-(   -2)")); // 3
console.log(calculate("6+(5+1)-5")); // 7
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // 23
