const getHoursSpent = (piles, speed) => {
  let hours = 0;

  for (let i = 0; i < piles.length; i++) {
    hours += Math.ceil(piles[i] / speed);
  }

  return hours;
};

/**
 * 40m x2 solutions
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let end = Math.max(...piles);

  if (piles.length === h) {
    return end;
  }

  let start = 1;
  while (start < end) {
    const speed = (start + end) >> 1;
    const target = getHoursSpent(piles, speed);

    if (target <= h) {
      end = speed;
    } else {
      start = speed + 1;
    }
  }

  return start;
};

// a_1 <= k_1 * x
// a_2 <= k_2 * x
// a_3 <= k_3 * x
// a_4 <= k_4 * x
// sum <= h * x
