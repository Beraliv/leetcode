/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  if (grid.length < 1) {
    return 0;
  }

  const n = grid.length;
  const m = grid[0].length;

  const islandCount = new Map();

  let islandGroup = 2;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const isCorrect = (x, y) => {
    if (x < 0 || x >= n) return false;
    if (y < 0 || y >= m) return false;
    return true;
  };

  const findIslands = (i, j, marker) => {
    if (!isCorrect(i, j)) return 0;
    if (grid[i][j] !== 1) return 0;

    grid[i][j] = marker;

    let count = 1;

    for (const [di, dj] of directions) {
      count += findIslands(i + di, j + dj, marker);
    }

    return count;
  };

  let largestIsland = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        const count = findIslands(i, j, islandGroup);
        islandCount.set(islandGroup, count);
        largestIsland = Math.max(largestIsland, count);
        islandGroup++;
      }
    }
  }

  const findIslandsNearWater = (x, y) => {
    const set = new Set();

    for (const [dx, dy] of directions) {
      const x1 = x + dx;
      const y1 = y + dy;

      if (!isCorrect(x1, y1)) {
        continue;
      }

      if (grid[x1][y1] > 0) {
        set.add(grid[x1][y1]);
      }
    }

    return set;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0) {
        largestIsland = Math.max(largestIsland, 1);

        const islands = findIslandsNearWater(i, j);

        let combinedIsland = 1;

        for (const island of islands) {
          combinedIsland += islandCount.get(island);
        }

        largestIsland = Math.max(largestIsland, combinedIsland);
      }
    }
  }

  return largestIsland;
};
