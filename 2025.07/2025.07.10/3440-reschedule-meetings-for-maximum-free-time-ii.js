var maxFreeTime = function (eventTime, startTime, endTime) {
  // Solution: 2 Loop + Array Cache
  // Time: O(N)
  // Space: O(N)

  const n = startTime.length;
  if (n === 0) {
    return 0;
  }

  const canMoveOutside = new Array(n).fill(false);
  let maxLeftGap = 0,
    maxRightGap = 0;
  for (let i = 0; i < n; i++) {
    if (endTime[i] - startTime[i] <= maxLeftGap) {
      canMoveOutside[i] = true;
    }
    maxLeftGap = Math.max(
      maxLeftGap,
      startTime[i] - (i === 0 ? 0 : endTime[i - 1])
    );

    if (endTime[n - i - 1] - startTime[n - i - 1] <= maxRightGap) {
      canMoveOutside[n - i - 1] = true;
    }
    maxRightGap = Math.max(
      maxRightGap,
      (i === 0 ? eventTime : startTime[n - i]) - endTime[n - i - 1]
    );
  }

  let maxGap = 0;
  for (let i = 0; i < n; i++) {
    const left = i === 0 ? 0 : endTime[i - 1];
    const right = i === n - 1 ? eventTime : startTime[i + 1];
    if (canMoveOutside[i]) {
      maxGap = Math.max(maxGap, right - left);
    } else {
      maxGap = Math.max(maxGap, right - left - (endTime[i] - startTime[i]));
    }
  }
  return maxGap;
};

console.log(maxFreeTime(5, [1, 3], [2, 5])); // 2
// [     ]
//  x-x--
console.log(maxFreeTime(10, [0, 7, 9], [1, 8, 10])); // 7
// [          ]
//  -xxxxxx-x-
console.log(maxFreeTime(10, [0, 3, 7, 9], [1, 4, 8, 10])); // 6
console.log(maxFreeTime(5, [0, 1, 2, 3, 4], [1, 2, 3, 4, 5])); // 0
