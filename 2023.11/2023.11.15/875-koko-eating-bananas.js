const getHours = (piles, speed) => {
  let hours = 0;
  for (const pile of piles) {
    hours += Math.ceil(pile / speed);
  }
  return hours;
};

/**
 * 11min
 *
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // Time: O(N * logN)
  // Space: O(1)

  let left = 1,
    right = 0;
  for (const pile of piles) {
    right = Math.max(right, pile);
  }

  while (left < right) {
    const middle = (left + right) >> 1;

    if (getHours(piles, middle) <= h) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  // overlap at left === right
  return left;
};

// a_1 <= k_1 * x
// a_2 <= k_2 * x
// a_3 <= k_3 * x
// a_4 <= k_4 * x
// sum <= h * x
