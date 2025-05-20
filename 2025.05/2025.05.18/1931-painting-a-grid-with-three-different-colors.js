const MOD = 1e9 + 7;

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var colorTheGrid = function (m, n) {
  // Solution: 1D DP + Bitmask + Adjacency List
  // Time: O(3^(2 * M) * N)
  // Space: O(3^(2 * M))

  const maskMap = new Map();
  const length = Math.pow(3, m);
  maskLoop: for (let mask = 0; mask < length; ++mask) {
    const representation = [];
    let rest = mask;
    for (let i = 0; i < m; i++) {
      let bit = rest % 3;
      if (
        representation.length > 0 &&
        representation[representation.length - 1] === bit
      ) {
        continue maskLoop;
      }
      representation.push(bit);
      rest = Math.floor(rest / 3);
    }
    maskMap.set(mask, representation);
  }

  const adjacencyMap = new Map();
  for (const [mask1, color1] of maskMap.entries()) {
    maskInnerLoop: for (const [mask2, color2] of maskMap.entries()) {
      for (let i = 0; i < m; i++) {
        if (color1[i] === color2[i]) {
          continue maskInnerLoop;
        }
      }
      if (!adjacencyMap.has(mask1)) {
        adjacencyMap.set(mask1, []);
      }
      adjacencyMap.get(mask1).push(mask2);
    }
  }

  let countObj = {};
  for (const mask of maskMap.keys()) {
    countObj[mask] = 1;
  }

  for (let i = 1; i < n; i++) {
    const nextCountObj = {};
    for (const mask2 of maskMap.keys()) {
      for (const mask1 of adjacencyMap.get(mask2) || []) {
        nextCountObj[mask2] =
          ((nextCountObj[mask2] || 0) + countObj[mask1]) % MOD;
      }
    }
    countObj = nextCountObj;
  }

  let result = 0;
  for (const count of Object.values(countObj)) {
    result = (result + count) % MOD;
  }
  return result;
};

console.log(colorTheGrid(1, 1)); // 3
console.log(colorTheGrid(1, 2)); // 6
console.log(colorTheGrid(5, 5)); // 580986
