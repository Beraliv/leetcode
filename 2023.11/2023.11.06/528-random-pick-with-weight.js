/**
 * @param {number[]} w
 */
var Solution = function (weights) {
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
  }
  for (let i = 0; i < weights.length; i++) {
    probabilities[i] = (probabilities[i - 1] || 0) + weights[i] / sum;
  }
  this.probabilities = probabilities;
};

// [2,3]
// [[0, 0.4], [0.4, 1]]

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  // 0 to 1
  const random = Math.random();

  let startIndex = 0;
  let endIndex = this.probabilities.length - 1;
  while (startIndex <= endIndex) {
    const middle = (startIndex + endIndex) >> 1;
    const end = this.probabilities[middle];
    const start = this.probabilities[middle - 1] || 0;
    if (start > random) {
      endIndex = middle - 1;
    } else if (random >= end) {
      startIndex = middle + 1;
    } else {
      // if (start <= random && random < end)
      return middle;
    }
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
