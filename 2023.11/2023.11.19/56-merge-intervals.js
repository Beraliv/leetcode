/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // Solution: Sort + Merge in Array
  // Time: O(N * logN)
  // Space: O(logN)

  intervals.sort((aInterval, bInterval) => aInterval[0] - bInterval[0]);

  const answer = [];

  for (const interval of intervals) {
    if (answer.length === 0) {
      answer.push(interval);
    } else {
      const lastInterval = answer[answer.length - 1];

      if (lastInterval[1] >= interval[0]) {
        lastInterval[1] = Math.max(lastInterval[1], interval[1]);
      } else {
        answer.push(interval);
      }
    }
  }

  return answer;
};

// [0,5],[2,3],[2,5],[5,6]

// sortedIntervals = [0,5],[2,3],[2,5],[5,6]
// answer = [[0,5]]
// i = 1, 5 >= 2, Max(5, 3)
// i = 2, 5 >= 2, Max(5, 5)
// i = 3, 5 >= 5, Max(5, 6)
// [[0,5]]
