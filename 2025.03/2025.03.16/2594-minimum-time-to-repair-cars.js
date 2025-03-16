const numberOfFixesCars = (ranks, time) => {
  let cars = 0;

  for (let i = 0; i < ranks.length; i++) {
    // rank * cars * cars <= time
    // cars <= Math.sqrt(time / rank)

    cars += Math.floor(Math.sqrt(time / ranks[i]));
  }

  return cars;
};

/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  const minRank = Math.min(...ranks);

  let start = 1,
    end = minRank * cars * cars;

  while (start < end) {
    // cannot use >> 1 because it will cause overflow
    let middle = Math.floor((start + end) / 2);

    if (numberOfFixesCars(ranks, middle) >= cars) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }

  return start;
};

console.log(repairCars([4, 2, 3, 1], 10));
console.log(
  repairCars(
    [
      31, 31, 5, 19, 19, 10, 31, 18, 19, 3, 16, 20, 4, 16, 2, 25, 10, 16, 23,
      18, 21, 23, 28, 6, 7, 29, 11, 11, 19, 20, 24, 19, 26, 12, 29, 29, 1, 14,
      17, 26, 24, 7, 11, 28, 22, 14, 31, 12, 3, 19, 16, 26, 11,
    ],
    736185
  )
); // 802474930
//   2358388332
