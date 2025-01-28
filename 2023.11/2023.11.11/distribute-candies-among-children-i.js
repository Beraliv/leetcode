/**
 * 1 <= n <= 50
 * 1 <= limit <= 50
 *
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  let set = new Set();

  for (let i = 0; i <= limit; i++) {
    for (let j = 0; j <= limit; j++) {
      let k = n - i - j;
      if (k >= 0 && k <= limit && !set.has(`${i}-${j}-${k}`)) {
        set.add(`${i}-${j}-${k}`);
      }
    }
  }

  return set.size;
};

// (1, 2, 2), (2, 1, 2) and (2, 2, 1)
console.log(distributeCandies(5, 2));

// (0, 0, 3), (0, 1, 2), (0, 2, 1), (0, 3, 0), (1, 0, 2), (1, 1, 1), (1, 2, 0), (2, 0, 1), (2, 1, 0) and (3, 0, 0)
console.log(distributeCandies(3, 3));
