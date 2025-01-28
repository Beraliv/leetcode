const deliver = (weights, capacity) => {
  let days = 0;
  let currentCapacity = 0;

  for (const weight of weights) {
    currentCapacity += weight;

    if (currentCapacity > capacity) {
      days++;
      currentCapacity = weight;
    }
  }

  return days + 1;
};

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let left = 0;
  let right = 0;

  for (const weight of weights) {
    left = Math.max(left, weight);
    right += weight;
  }

  while (left < right) {
    const middle = (left + right) >> 1;

    if (deliver(weights, middle) <= days) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return left;
};

// [2, 3], 1
// min = 4, max = 5
// capacity = 4, actualDays = 2
// capacity = 4, actualDays = 2

// weights = [1, 1, 2]
// days = 2
// min = 2, max = 3
// middle = 4, actualDays = 1
// middle = 2, actualDays = 2

// weights = [3,2,2,4,1,4], days = 3
// min = 4, max = 10
// capacity = (4+16)/2 = 10, actualDays = 2
// capacity = (4+10)/2 = 7, actualDays = 3
