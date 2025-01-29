import { Queue } from "@datastructures-js/queue";

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  // Time: O(N) + O(E)
  // Space: O(N * E ^ 2)

  if (queries.length === 0) {
    return [];
  }

  // visited
  const inDegree = new Array(numCourses).fill(0);
  const adjacent = Array.from({ length: numCourses }, () => []);

  for (const [v1, v2] of prerequisites) {
    adjacent[v1].push(v2);
    inDegree[v2]++;
  }

  const queue = new Queue();
  for (let v = 0; v < numCourses; v++) {
    if (inDegree[v] === 0) {
      queue.enqueue(v);
    }
  }

  // O(N * E ^ 2) space
  const matrix = new Map();
  for (let v = 0; v < numCourses; v++) {
    matrix.set(v, new Set());
  }

  // O(N * E) time, N in queue * E
  while (!queue.isEmpty()) {
    const v1 = queue.dequeue();

    // direct dependencies: v1 => v2
    for (const v2 of adjacent[v1]) {
      matrix.get(v2).add(v1);

      // indirect dependencies: v0 => v1 => v2
      for (const v0 of matrix.get(v1)) {
        matrix.get(v2).add(v0);
      }

      inDegree[v2]--;
      if (inDegree[v2] === 0) {
        queue.enqueue(v2);
      }
    }
  }

  return queries.map(([v2, v1]) => matrix.get(v1).has(v2));
};

// Test 1
// console.log(
//   checkIfPrerequisite(
//     2,
//     [[1, 0]],
//     [
//       [0, 1],
//       [1, 0],
//     ]
//   )
// );
// Test 2
// console.log(
//   checkIfPrerequisite(
//     2,
//     [],
//     [
//       [1, 0],
//       [0, 1],
//     ]
//   )
// );
// Test 3
// console.log(
//   checkIfPrerequisite(
//     3,
//     [
//       [1, 2],
//       [1, 0],
//       [2, 0],
//     ],
//     [
//       [1, 0],
//       [1, 2],
//     ]
//   )
// );
// Test 4
// console.log(
//   checkIfPrerequisite(
//     3,
//     [
//       [0, 1],
//       [1, 2],
//     ],
//     [
//       [0, 1],
//       [0, 2],
//     ]
//   )
// );
// Test 5
console.log(
  checkIfPrerequisite(
    6,
    [
      [0, 5],
      [1, 2],
      [1, 4],
      [2, 3],
      [5, 1],
    ],
    [[0, 3]]
  )
);
