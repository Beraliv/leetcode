export {};

const combinations = (n, k) => {
  if (n < 2n) return 1n;

  n = BigInt(n);
  k = BigInt(k);

  return fact(n) / (fact(n - k) * fact(k));
};

const cache = new Map();

/**
 *
 * @param {BigInt} n
 * @returns {BigInt}
 */
const fact = (n) => {
  if (n < 2) return 1n;

  if (cache.has(n)) {
    return cache.get(n);
  }

  const result = n * fact(n - 1n);
  cache.set(n, result);
  return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function (nums) {
  if (nums.length < 3) {
    return 1n;
  }

  const dfs = (nums) => {
    if (nums.length < 3) {
      return 1n;
    }

    const left = [];
    const right = [];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[0]) {
        left.push(nums[i]);
      } else if (nums[i] > nums[0]) {
        right.push(nums[i]);
      }
    }

    return combinations(nums.length - 1, left.length) * dfs(left) * dfs(right);
  };

  const ways = dfs(nums);

  return Number((ways - 1n) % BigInt(1e9 + 7));
};

//      4
//   2     6
// 1   3 5   7

console.log(numOfWays([4, 2, 6, 1, 3, 5, 7]));

//    3
// 1     4
//   2 5   5

console.log(numOfWays([3, 4, 5, 1, 2]));
