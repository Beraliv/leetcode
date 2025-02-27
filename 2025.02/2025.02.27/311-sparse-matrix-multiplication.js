/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
var multiply = function (mat1, mat2) {
  // Solution: List of lists
  // Time: O(N * M * P)
  // Space: O(N * M + N * P)

  if (mat1.length === 0 || mat2.length === 0) {
    return [];
  }

  const m = mat1.length;
  const n = mat2.length;

  if (mat1[0].length !== n) {
    return [];
  }

  const p = mat2[0].length;

  const result = Array.from({ length: m }, () => Array(p).fill(0));

  let kiPairs = new Map();
  let kjPairs = new Map();
  for (let k = 0; k < n; k++) {
    kiPairs.set(k, []);
    kjPairs.set(k, []);
  }

  for (let i = 0; i < m; i++) {
    for (let k = 0; k < n; k++) {
      if (mat1[i][k] !== 0) {
        kiPairs.get(k).push(i);
      }
    }
  }

  for (let j = 0; j < p; j++) {
    for (let k = 0; k < n; k++) {
      if (mat2[k][j] !== 0) {
        kjPairs.get(k).push(j);
      }
    }
  }

  for (let k = 0; k < n; k++) {
    const is = kiPairs.get(k);
    const js = kjPairs.get(k);
    for (let i of is) {
      for (let j of js) {
        result[i][j] += mat1[i][k] * mat2[k][j];
      }
    }
  }

  return result;
};

console.log(
  multiply(
    [
      [1, 0, 0],
      [-1, 0, 3],
    ],
    [
      [7, 0, 0],
      [0, 0, 0],
      [0, 0, 1],
    ]
  )
); //  [[7,0,0],[-7,0,3]]

console.log(multiply([[1, -5]], [[12], [-1]]));
