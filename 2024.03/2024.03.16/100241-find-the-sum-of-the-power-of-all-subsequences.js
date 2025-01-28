const MOD = 10 ** 9 + 7;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfPower = function (nums, k) {
  const cache = Array.from({ length: nums.length }, () =>
    Array.from({ length: k }, () => 0)
  );

  const dfs = (index, sum) => {
    if (cache[index][sum] > 0) {
      return cache[index][sum];
    }

    if (sum === 0) {
      return 2 ** (nums.length - index) % MOD;
    }

    if (sum < 0) {
      return 0;
    }

    if (index >= nums.length) {
      return 0;
    }

    return (dfs(index + 1, sum - nums[index]) + 2 * dfs(index + 1, sum)) % MOD;
  };

  return dfs(0, k);
};
