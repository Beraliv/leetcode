export {};

const intersect = (a, b) => {
  if (a[1] <= b[0]) {
    return false;
  }

  return true;
};

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  if (intervals.length < 2) {
    return true;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  let previousInterval = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    if (intersect(previousInterval, interval)) {
      return false;
    }

    previousInterval = interval;
  }

  return true;
};
