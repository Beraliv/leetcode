/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  // Solution: Topological Sort
  // Time: O(V + E), where V = number of recipes + number of supplies, E = number of all ingredients
  // Space: O(V + E)

  const adjMap = new Map();
  const inDegree = {};

  const addEdge = (from, to) => {
    if (!adjMap.has(from)) {
      adjMap.set(from, []);
    }
    adjMap.get(from).push(to);
    if (!(to in inDegree)) {
      inDegree[to] = 0;
    }
    inDegree[to]++;
  };

  for (let i = 0; i < recipes.length; i++) {
    for (const ingredient of ingredients[i]) {
      addEdge(ingredient, recipes[i]);
    }
  }

  let index = 0;
  const sorted = [...supplies];

  while (index < sorted.length) {
    const v = sorted[index];

    for (const neighbour of adjMap.get(v) || []) {
      inDegree[neighbour]--;

      if (inDegree[neighbour] === 0) {
        sorted.push(neighbour);
      }
    }

    index++;
  }

  const answer = new Array(sorted.length - supplies.length);

  for (let i = supplies.length; i < sorted.length; i++) {
    answer[i - supplies.length] = sorted[i];
  }

  return answer;
};

// console.log(
//   findAllRecipes(
//     ["bread", "sandwich", "burger"],
//     [
//       ["yeast", "flour"],
//       ["bread", "meat"],
//       ["sandwich", "meat", "bread"],
//     ],
//     ["yeast", "flour", "meat"]
//   )
// ); // ["bread", "sandwich", "burger"]

// console.log(
//   findAllRecipes(
//     ["A", "B", "C"],
//     [
//       ["D", "E"],
//       ["C", "D"],
//       ["B", "D"],
//     ],
//     ["D", "E"]
//   )
// ); // ["A"]

console.log(
  findAllRecipes(
    ["burger", "sandwich", "bread"],
    [
      ["sandwich", "meat", "bread"],
      ["bread", "meat"],
      ["yeast", "flour"],
    ],
    ["yeast", "flour", "meat"]
  )
); // ["bread", "sandwich", "burger"]
