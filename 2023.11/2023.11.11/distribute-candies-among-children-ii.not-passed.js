// NOT PASSED

let combinations = (i, j, k) => {
  if (i === j && j === k) {
    return 1;
  }

  if (i == j || j === k || i === k) {
    return 3;
  }

  return 6;
};

/**
 * 1 <= n <= 10**6
 * 1 <= limit <= 10**6
 *
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  let count = 0;

  // skip values where n - i > 2 * limit, therefore i >= n - 2 * limit
  for (let i = Math.max(n - 2 * limit, 0); i <= limit; i++) {
    // skip values where n - i - j > limit, therefore j >= n - i - limit
    for (
      let j = Math.max(n - i - limit, i);
      j <= Math.min(limit, n - i - j);
      j++
    ) {
      // n - i - j - k > limit
      let k = n - i - j;
      if (k >= 0 && k <= limit) {
        count += combinations(i, j, k);
      }
    }
  }

  return count;
};

// n = 5, limit = 1 => {}
// n = 5, limit = 2 => {(1, 2, 2)}
// n = 5, limit = 3 => {(0, 2, 3), (1, 1, 3), (1, 2, 2)}
// n = 5, limit = 4 => {(0, 1, 4), (0, 2, 3), (1, 1, 3), (1, 2, 2)}
// n = 5, limit = 5 => {(0, 0, 5), (0, 1, 4), (0, 2, 3), (1, 1, 3), (1, 2, 2)}

// n = 5, limit = 2
// (0, 0, 5) => false
// (0, 1, 4) => false
// (0, 2, 3) => false
// (1, 0, 4) => false
// (1, 1, 3) => false
// (1, 2, 2) => true

// n = 3, limit = 3
// (0, 0, 3) => true
// (0, 1, 2) => true

// n = 10, limit = 3
// (0, 0, 10)
// (1, 1, 8)
// (2, 2, 6)
// (3, 3, 4)

// n = 10, limit = 4
//

const perf = (n, limit) => {
  console.log(`distributeCandies(${n}, ${limit})`);

  const start = Date.now();

  const answer = distributeCandies(n, limit);

  const end = Date.now();

  console.log(`Finished within ${Math.round((end - start) / 10) / 100}s`);

  console.log(`Answer is ${answer}`);
};

// (1, 2, 2), (2, 1, 2) and (2, 2, 1)
perf(5, 2);

// (0, 0, 3), (0, 1, 2), (0, 2, 1), (0, 3, 0), (1, 0, 2), (1, 1, 1), (1, 2, 0), (2, 0, 1), (2, 1, 0) and (3, 0, 0)
perf(3, 3);

perf(100_000, 100_000);

perf(1_000_000, 1_000_000);
