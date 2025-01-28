const findClosestElement = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const middle = (start + end) >> 1;

    if (arr[middle] >= value) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }

  return start;
};

const expandWindow = (arr, closestIndex, k, x) => {
  let left = closestIndex - 1;
  let right = closestIndex;

  while (right - left - 1 < k) {
    if (left === -1) {
      right++;
      continue;
    }

    if (right === arr.length) {
      left--;
      continue;
    }

    if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
      left--;
    } else {
      right++;
    }
  }

  return left + 1;
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  if (arr.length <= k) {
    return arr;
  }

  // O(logN)
  const closestIndex = findClosestElement(arr, x);
  // O(K)
  const start = expandWindow(arr, closestIndex, k, x);
  // O(K)
  return arr.slice(start, start + k);
};
