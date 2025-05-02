/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  // Solution: 2 Pointers
  // Time: O(N)
  // Space: O(N)

  dominoes = "L" + dominoes + "R";
  const arr = dominoes.split("");

  for (let left = 0, right = 1; right < arr.length; right++) {
    if (arr[right] === ".") {
      continue;
    }

    // R > L
    if (arr[left] > arr[right]) {
      for (let i = left + 1, j = right - 1; j - i && i < j; i++, j--) {
        arr[i] = "R";
        arr[j] = "L";
      }
    }

    if (arr[left] === arr[right]) {
      for (let i = left; i < right; i++) {
        arr[i] = arr[right];
      }
    }

    left = right;
  }

  return arr.slice(1, arr.length - 1).join("");
};
