const top = (stack) => stack[stack.length - 1];

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];

  for (const asteroid of asteroids) {
    let crashed = false;

    while (stack.length > 0 && top(stack) > 0 && asteroid < 0) {
      const diff = Math.abs(top(stack)) - Math.abs(asteroid);

      if (diff < 0) {
        stack.pop();
        continue;
      }

      if (diff === 0) {
        stack.pop();
      }

      crashed = true;
      break;
    }

    if (!crashed) {
      stack.push(asteroid);
    }
  }

  return stack;
};
