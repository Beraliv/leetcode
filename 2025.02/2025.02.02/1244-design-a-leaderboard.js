// 1. sort array when top() is called
// addScore: O(1)
// top: O(N * logN)
// reset: O(1)

// 2. size k min heap when top() is called
// addScore: O(1)
// top: O(N * logK)
// reset: O(1)

// 3. Balanced Binary Tree
// addScore: O(log n) insert to binaryTree
// top: O(k) pre-order travel
// reset: O(log n) del and maintain the tree

// 4. Quick select when top() is called
// addScore: O(1)
// top: avg O(n) worse O(n^2) like quick sort but only partition the top k we want
// reset: O(1)

var Leaderboard = function () {
  this.indexMap = new Map();
};

/**
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function (playerId, score) {
  this.indexMap.set(playerId, (this.indexMap.get(playerId) || 0) + score);
};

const quickSelect = (arr, start, end, k) => {
  const pivotIndex = partition(arr, start, end);
  if (pivotIndex < k) {
    return quickSelect(arr, pivotIndex + 1, end, k);
  }
  if (pivotIndex > k) {
    return quickSelect(arr, start, pivotIndex - 1, k);
  }

  let sum = 0;
  for (let i = pivotIndex; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const partition = (arr, start, end) => {
  const pivot = arr[end];
  let i = start,
    j = end - 1;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  // i > j
  swap(arr, i, end);
  return i;
};

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

const findKthLargest = (values, k) => {
  return quickSelect(
    values,
    0,
    values.length - 1,
    Math.max(0, values.length - k)
  );
};

/**
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function (K) {
  return findKthLargest([...this.indexMap.values()], K);
};

/**
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function (playerId) {
  this.indexMap.delete(playerId);
};

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */

console.log(">>> Leaderboard");
const leaderboard = new Leaderboard();
leaderboard.addScore(1, 73);
leaderboard.addScore(2, 56);
leaderboard.addScore(3, 39);
leaderboard.addScore(4, 51);
leaderboard.addScore(5, 4);
console.log(leaderboard.top(1));
leaderboard.reset(1);
leaderboard.reset(2);
leaderboard.addScore(2, 51);
console.log(leaderboard.top(3));
