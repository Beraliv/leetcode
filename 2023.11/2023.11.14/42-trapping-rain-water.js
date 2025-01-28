const top = (stack) => stack[stack.length - 1];

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const stack = [];
  let water = 0;

  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[top(stack)]) {
      const j = stack.pop();

      if (!stack.length) {
        break;
      }

      // k   i
      // k j i
      const k = top(stack);

      const long = Math.min(height[i], height[k]) - height[j];
      const width = i - k - 1;

      water += width * long;
    }

    stack.push(i);
  }

  return water;
};
