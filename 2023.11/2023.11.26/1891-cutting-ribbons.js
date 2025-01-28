/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
var maxLength = function (ribbons, k) {
  const max = ribbons.reduce((acc, ribbon) => acc + ribbon, 0);
  if (k > max) {
    return 0;
  }

  const canCut = (size) => {
    let count = 0;

    for (const ribbon of ribbons) {
      count += Math.floor(ribbon / size);

      if (count >= k) {
        return true;
      }
    }

    return false;
  };

  let left = 0;
  let right = Math.floor(max / k);

  while (left <= right) {
    let middle = (left + right) >> 1;

    if (canCut(middle)) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return right;
};
