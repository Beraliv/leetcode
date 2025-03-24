/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
  // Solution: Merge Intervals in an Array + Linear Iteration
  // Time: O(N * logN)
  // Space: O(N)
  //   if (meetings.length < 1) {
  //     return days;
  //   }
  //   meetings.sort((a, b) => a[0] - b[0]);
  //   const merged = [];
  //   merged.push(meetings[0]);
  //   for (let i = 1; i < meetings.length; i++) {
  //     const current = merged[merged.length - 1];
  //     const next = meetings[i];
  //     if (current[1] >= next[0]) {
  //       current[1] = Math.max(current[1], next[1]);
  //     } else {
  //       merged.push(next);
  //     }
  //   }
  //   for (let i = 0; i < merged.length; i++) {
  //     const current = merged[i];
  //     days -= current[1] - current[0] + 1;
  //   }
  //   return days;

  // Solution 2: Linear Iteration over Sorted Intervals
  // Time: O(N * logN)
  // Space: O(logN)

  if (meetings.length < 1) {
    return days;
  }

  meetings.sort((a, b) => a[0] - b[0]);

  let latestEnd = -1;

  for (let i = 0; i < meetings.length; i++) {
    let start = meetings[i][0],
      end = meetings[i][1];

    if (latestEnd >= start) {
      days -= Math.max(latestEnd, end) - latestEnd;
    } else {
      days -= end - start + 1;
    }

    latestEnd = Math.max(latestEnd, end);
  }

  return days;
};

console.log(
  countDays(10, [
    [5, 7],
    [1, 3],
    [9, 10],
  ])
); // 2
