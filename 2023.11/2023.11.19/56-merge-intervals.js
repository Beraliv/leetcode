/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const sortedIntervals = [...intervals].sort(
    ([start1], [start2]) => start1 - start2
  );

  const answer = [];
  for (let i = 0; i < sortedIntervals.length; i++) {
    if (answer.length === 0) {
      answer.push(sortedIntervals[i]);
    } else {
      if (answer[answer.length - 1][1] >= sortedIntervals[i][0]) {
        answer[answer.length - 1][1] = Math.max(
          answer[answer.length - 1][1],
          sortedIntervals[i][1]
        );
      } else {
        answer.push(sortedIntervals[i]);
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
