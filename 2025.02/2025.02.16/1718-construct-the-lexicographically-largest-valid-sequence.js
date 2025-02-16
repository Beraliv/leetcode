/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function (n) {
  // Solution: Backtracking
  // Time: O(N!)
  // Space: O(N)

  if (n === 0) {
    return [];
  }

  const m = 2 * n - 1;
  const visited = Array(n + 1).fill(false);
  const indexMap = new Map();

  const backtrack = (index) => {
    if (index >= m) return true;

    if (indexMap.has(index)) {
      return backtrack(index + 1);
    }

    for (let v = n; v >= 1; v--) {
      if (visited[v]) {
        continue;
      }

      if (v === 1) {
        if (!indexMap.has(index)) {
          indexMap.set(index, v);
          visited[v] = true;
          const answer = backtrack(index + 1);
          if (answer) {
            return answer;
          }
          visited[v] = false;
          indexMap.delete(index);
        }
      } else {
        if (!indexMap.has(index) && index + v < m && !indexMap.has(index + v)) {
          indexMap.set(index, v);
          indexMap.set(index + v, v);
          visited[v] = true;
          const answer = backtrack(index + 1);
          if (answer) {
            return answer;
          }
          visited[v] = false;
          indexMap.delete(index);
          indexMap.delete(index + v);
        }
      }
    }

    return false;
  };

  backtrack(0);

  const answer = [];
  for (let i = 0; i < m; i++) {
    answer.push(indexMap.get(i));
  }
  return answer;
};

console.log(constructDistancedSequence(1)); // [1]
console.log(constructDistancedSequence(2)); // [2, 1, 2]
console.log(constructDistancedSequence(3)); // [3, 1, 2, 3, 2]
console.log(constructDistancedSequence(4)); // [4, 2, 3, 2, 4, 3, 1]
console.log(constructDistancedSequence(5)); // [5, 3, 1, 4, 3, 5, 2, 4, 2]
//                                              0  1  2  3  4  5  6  7  8
