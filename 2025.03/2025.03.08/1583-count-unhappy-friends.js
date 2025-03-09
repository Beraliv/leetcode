/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function (n, preferences, pairs) {
  const partnerMap = new Array(n);
  for (let [x, y] of pairs) {
    partnerMap[x] = y;
    partnerMap[y] = x;
  }

  const rank = Array.from({ length: n }, () => new Array(n));
  for (let i = 0; i < n; i++) {
    // there are `n - 1` elements in `preferences`
    for (let j = 0; j < n - 1; j++) {
      rank[i][preferences[i][j]] = j;
    }
  }

  const isUnhappy = (x, u) => {
    // x prefers u over y (i.e. partnerMap[x]), and
    // u prefers x over v (i.e. partnerMap[u]).

    return (
      rank[x][u] < rank[x][partnerMap[x]] && rank[u][x] < rank[u][partnerMap[u]]
    );
  };

  let unhappy = 0;
  for (let x = 0; x < n; x++) {
    for (const u of preferences[x]) {
      if (isUnhappy(x, u)) {
        unhappy++;
        break;
      }
    }
  }

  return unhappy;
};

// console.log(
//   unhappyFriends(
//     4,
//     [
//       [1, 2, 3],
//       [3, 2, 0],
//       [3, 1, 0],
//       [1, 2, 0],
//     ],
//     [
//       [0, 1],
//       [2, 3],
//     ]
//   )
// ); // 2
// console.log(unhappyFriends(2, [[1], [0]], [[1, 0]])); // 0
console.log(
  unhappyFriends(
    4,
    [
      [1, 3, 2],
      [2, 3, 0],
      [1, 3, 0],
      [0, 2, 1],
    ],
    [
      [1, 3],
      [0, 2],
    ]
  )
); // 4
// console.log(
//   unhappyFriends(
//     4,
//     [
//       [1, 3, 2],
//       [2, 3, 0],
//       [1, 0, 3],
//       [1, 0, 2],
//     ],
//     [
//       [2, 1],
//       [3, 0],
//     ]
//   )
// ); // 0
