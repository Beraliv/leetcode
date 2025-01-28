/**
 * O(N)
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {void}
 */
const insertInterval = (intervals, newInterval) => {
  let index = 0;
  while (index < intervals.length && intervals[index][0] < newInterval[0]) {
    index++;
  }
  const updatedIntervals = [];
  for (let i = 0; i < index; i++) {
    updatedIntervals.push([...intervals[i]]);
  }
  updatedIntervals.push(newInterval);
  for (let i = index; i < intervals.length; i++) {
    updatedIntervals.push([...intervals[i]]);
  }

  return updatedIntervals;
};

// 1 2 3
//   2 3 4
//     3 = min
//   2 = max
const isOverlap = (i1, i2) =>
  Math.min(i1[1], i2[1]) - Math.max(i1[0], i2[0]) >= 0;

const mergeIntervals = (i1, i2) => [
  Math.min(i1[0], i2[0]),
  Math.max(i1[1], i2[1]),
];

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals = insertInterval(intervals, newInterval);

  const mergedIntervals = [];
  for (let index = 0; index < intervals.length; index++) {
    let currentInterval = [...intervals[index]];

    while (
      index < intervals.length &&
      isOverlap(currentInterval, intervals[index])
    ) {
      currentInterval = mergeIntervals(currentInterval, intervals[index]);
      index++;
    }

    index--;
    mergedIntervals.push(currentInterval);
  }

  return mergedIntervals;
};

const intervals = [
  [1, 3],
  [5, 9],
];
const newInterval = [0, 5];
const updatedIntervals = insert(intervals, newInterval);
console.log(intervals);
console.log(updatedIntervals);
