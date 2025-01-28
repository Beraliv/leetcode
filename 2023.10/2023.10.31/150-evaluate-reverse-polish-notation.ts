const OPERATORS = ["+", "-", "*", "/"];

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    if (OPERATORS.includes(token)) {
      const second = stack.pop()!;
      const first = stack.pop()!;

      if (token === "+") {
        stack.push(first + second);
      } else if (token === "-") {
        stack.push(first - second);
      } else if (token === "*") {
        stack.push(first * second);
      } else if (token === "/") {
        stack.push(Math.trunc(first / second));
      }
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop()!;
}
