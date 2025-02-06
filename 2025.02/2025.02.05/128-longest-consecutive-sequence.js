// 29m
function longestConsecutive(nums) {
  if (nums.length === 0) {
    return 0;
  }

  // Solution 1. Sort + Iteration
  // Time: O(N * logN)
  // Space: O(logN)

  // nums.sort((a, b) => a - b);

  // let maxCount = 1,
  //   count = 1;
  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[i] === nums[i - 1]) {
  //     continue;
  //   } else if (nums[i] - nums[i - 1] === 1) {
  //     count++;
  //   } else {
  //     maxCount = Math.max(maxCount, count);
  //     count = 1;
  //   }
  // }

  // maxCount = Math.max(maxCount, count);

  // Solution 2. Set + Smart iteration
  // Time: O(N)
  // Space: O(N)

  const set = new Set();
  for (const num of nums) {
    set.add(num);
  }

  let maxCount = 1;
  for (const value of set) {
    // if it has previous values, we need to count from a previous value
    // if it doesn't have next value, it's not the first element in the chain
    if (set.has(value - 1) || !set.has(value + 1)) {
      continue;
    }

    let prev = value;
    let count = 1;
    while (set.has(prev + 1)) {
      prev = prev + 1;
      count++;
    }

    if (count > maxCount) {
      maxCount = count;
    }
  }

  return maxCount;
}
