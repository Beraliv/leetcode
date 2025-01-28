// 1. grid (0 - can go, 1 - cannot go)

import { MinPriorityQueue } from "@datastructures-js/priority-queue";

const debug = (grid) => {
  const n = grid.length;
  const m = grid[0].length;

  const characters = [];
  for (let row = 0; row < n; row++) {
    let rowCharacters = [];
    for (let col = 0; col < m; col++) {
      const cell = grid[row][col];
      rowCharacters.push(
        typeof cell === "object" ? JSON.stringify(cell) : cell
      );
    }
    characters.push(rowCharacters);
  }
  console.log(characters);
};

const gridDijkstra = (grid) => {
  debug(grid);

  const n = grid.length;
  const m = grid[0].length;

  // 1. Prepare grid for Dijkstra
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (grid[row][col] === 0) {
        grid[row][col] = { dist: Infinity, prev: undefined, visited: false };
      }
    }
  }

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const minQueue = new MinPriorityQueue({
    priority: ([row, col]) => grid[row][col].dist,
  });

  minQueue.enqueue([0, 0]);
  grid[0][0].dist = 0;

  while (!minQueue.isEmpty()) {
    const [x0, y0] = minQueue.dequeue().element;
    const cell0 = grid[x0][y0];

    for (const [dx, dy] of directions) {
      const x = x0 + dx;
      const y = y0 + dy;

      if (x < 0 || x >= n) continue;
      if (y < 0 || y >= m) continue;

      const cell = grid[x][y];
      if (cell === 1) continue;
      if (cell.visited) continue;

      const dist = cell0.dist + 1;
      if (dist < cell.dist) {
        cell.dist = dist;
        cell.prev = [x0, y0];
      }

      minQueue.enqueue([x, y]);
    }

    // console.log(`Grid after visiting (${x0},${y0})`);
    // debug(grid);
    grid[x0][y0].visited = true;
  }

  let x = n - 1;
  let y = m - 1;

  if (grid[x][y].dist === Infinity) {
    return null;
  }

  const answer = [[x, y]];

  while (!(x === 0 && y === 0)) {
    const cell = grid[x][y];
    [x, y] = cell.prev;
    answer.push([x, y]);
  }

  return answer.reverse();
};

const answer1 = gridDijkstra([
  [0, 1, 1],
  [0, 1, 1],
  [0, 0, 0],
]);

console.log("Answer is", answer1);

const answer2 = gridDijkstra([
  [0, 1, 1],
  [0, 1, 1],
  [1, 0, 0],
]);

console.log("Answer is ", answer2);

const answer3 = gridDijkstra([
  [0, 0, 0, 0],
  [1, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 1, 1],
  [0, 0, 0, 0],
]);

console.log("Answer is ", answer3);
