const top = (stack) => stack[stack.length - 1];

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // Solution 1. Stack + Monotonic sequence
  // Time: O(N)
  // Space: O(N)

  // let stack = [];
  // const answer = Array(temperatures.length).fill(0);

  // for (let i = 0; i < temperatures.length; i++) {
  //   const temperature = temperatures[i];

  //   while (stack.length && temperatures[top(stack)] < temperature) {
  //     const j = stack.pop();
  //     answer[j] = i - j;
  //   }

  //   stack.push(i);
  // }

  // return answer;

  // Solution 2. Answer from end to start
  // Time: O(N)
  // Space: O(1)

  if (temperatures.length === 0) {
    return [];
  }

  const days = Array(temperatures.length).fill(0);
  let hottest = 0;

  for (let i = temperatures.length - 1; i >= 0; i--) {
    if (temperatures[i] >= hottest) {
      hottest = temperatures[i];
      continue;
    }

    let j = i + 1;
    while (temperatures[i] >= temperatures[j]) {
      j += days[j];
    }
    days[i] = j - i;
  }

  return days;
};

// [73, 72, 74], [2] <= stack
// days = [2, 1, 0]
// i = 2, t = 74, j = 0
// return [2, 1, 0]
