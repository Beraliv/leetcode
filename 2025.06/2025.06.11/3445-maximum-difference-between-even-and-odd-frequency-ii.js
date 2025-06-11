// 0, 0 => 0
// 0, 1 => 1
// 1, 0 => 2
// 1, 1 => 3
const getState = (countA, countB) => {
  return ((countA & 1) << 1) | (countB & 1);
};

const ALL_LETTERS = ["0", "1", "2", "3", "4", "5"];

var maxDifference = function (s, k) {
  let maxDiff = -Infinity;

  for (const a of ALL_LETTERS) {
    for (const b of ALL_LETTERS) {
      if (a === b) {
        continue;
      }

      const best = Array(4).fill(Infinity);
      let countA = 0,
        countB = 0;
      let prevA = 0,
        prevB = 0;
      let left = -1;

      for (let right = 0; right < s.length; right++) {
        countA += Number(s[right] === a);
        countB += Number(s[right] === b);

        while (right - left >= k && countB - prevB >= 2) {
          const leftState = getState(prevA, prevB);
          best[leftState] = Math.min(best[leftState], prevA - prevB);
          left++;
          prevA += Number(s[left] === a);
          prevB += Number(s[left] === b);
        }

        const rightState = getState(countA, countB);
        if (best[rightState ^ 0b10] !== Infinity) {
          maxDiff = Math.max(
            maxDiff,
            countA - countB - best[rightState ^ 0b10]
          );
        }
      }
    }
  }
  return maxDiff;
};
