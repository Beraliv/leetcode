/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  if (words.length === 0) {
    return "";
  }

  const graph = new Map();
  let previous = words[0];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    for (let j = 0; j < word.length; j++) {
      const ch = word[j];
      const neighbours = graph.get(ch) || new Set();
      graph.set(ch, neighbours);
    }

    let j = 0;
    const minLength = Math.min(previous.length, word.length);
    for (; j < minLength && previous[j] === word[j]; j++) {}

    if (j === minLength && previous.length > word.length) {
      return "";
    }

    if (j < minLength) {
      const ch = previous[j];
      const neighbours = graph.get(ch) ?? new Set();
      neighbours.add(word[j]);
      graph.set(ch, neighbours);
    }

    previous = word;
  }

  const indegree = new Map();
  for (const [v, neightbours] of graph.entries()) {
    if (!indegree.has(v)) {
      indegree.set(v, 0);
    }

    for (const neighbour of neightbours) {
      indegree.set(neighbour, (indegree.get(neighbour) || 0) + 1);
    }
  }

  const sorted = [];
  for (const [neighbour, count] of indegree.entries()) {
    if (count === 0) {
      sorted.push(neighbour);
    }
  }

  let index = 0;
  while (index < sorted.length) {
    const v = sorted[index];

    for (const neighbour of graph.get(v)) {
      const count = indegree.get(neighbour) - 1;
      indegree.set(neighbour, count);

      if (count === 0) {
        sorted.push(neighbour);
      }
    }

    index++;
  }

  if (sorted.length === indegree.size) {
    return sorted.join("");
  }

  return "";
};
