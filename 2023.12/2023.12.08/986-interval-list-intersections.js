/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  const intersection = [];

  let i = 0;
  let j = 0;

  while (i < firstList.length && j < secondList.length) {
    const first = firstList[i];
    const second = secondList[j];

    const start = Math.max(first[0], second[0]);
    const end = Math.min(first[1], second[1]);

    if (start <= end) {
      intersection.push([start, end]);
    }

    if (first[1] < second[1]) {
      i++;
    } else if (first[1] > second[1]) {
      j++;
    } else {
      i++;
      j++;
    }
  }

  return intersection;
};
