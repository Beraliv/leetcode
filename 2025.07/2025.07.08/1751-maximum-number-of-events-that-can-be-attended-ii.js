const bisectRight = (array, end) => {
  let left = 0,
    right = array.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid][0] <= end) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function (events, k) {
  // Solution: Sort + Top-Down DFS + Memoization
  // Time: O(N * K * logN)
  // Space: O(N * K)

  events.sort((a, b) => a[0] - b[0]);

  const dp = Array.from({ length: events.length }, () => Array(k + 1).fill(0));

  const dfs = (index, count) => {
    if (count === 0 || index >= events.length) {
      return 0;
    }

    if (dp[index][count] !== 0) {
      return dp[index][count];
    }

    const nextIndex = bisectRight(events, events[index][1]);
    return (dp[index][count] = Math.max(
      // don't choose current event
      dfs(index + 1, count),
      // choose current event
      events[index][2] + dfs(nextIndex, count - 1) // choose current event
    ));
  };

  return dfs(0, k);
};

console.log(
  maxValue(
    [
      [1, 2, 4],
      [3, 4, 3],
      [2, 3, 1],
    ],
    2
  )
); // 7
console.log(
  maxValue(
    [
      [1, 2, 4],
      [3, 4, 3],
      [2, 3, 10],
    ],
    2
  )
); // 10
console.log(
  maxValue(
    [
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
      [4, 4, 4],
    ],
    3
  )
); // 9
