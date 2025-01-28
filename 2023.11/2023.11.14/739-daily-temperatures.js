const top = (stack) => stack[stack.length - 1];

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];
  const answer = Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];

    while (stack.length && temperatures[top(stack)] < temperature) {
      const j = stack.pop();
      answer[j] = i - j;
    }

    stack.push(i);
  }

  return answer;
};
