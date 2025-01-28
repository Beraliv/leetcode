const getTime = (cars, i, j) => {
  const [p1, s1] = cars[i];
  const [p2, s2] = cars[j];

  return (p2 - p1) / (s1 - s2);
};

/**
 * @param {number[][]} cars
 * @return {number[]}
 */
var getCollisionTimes = function (cars) {
  const answer = Array(cars.length).fill(-1);

  const stack = [];

  for (let i = cars.length - 1; i >= 0; i--) {
    while (stack.length > 0) {
      const j = stack[stack.length - 1];
      if (
        cars[i][1] <= cars[j][1] ||
        (getTime(cars, i, j) >= answer[j] && answer[j] > 0)
      ) {
        stack.pop();
      } else {
        break;
      }
    }

    if (stack.length > 0) {
      const j = stack[stack.length - 1];
      answer[i] = getTime(cars, i, j);
    }

    stack.push(i);
  }

  return answer;
};
