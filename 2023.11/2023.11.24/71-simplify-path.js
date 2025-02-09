/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];

  for (const portion of path.split("/")) {
    // 4. path/../ => /
    if (portion === "..") {
      stack.pop();
      continue;
    }
    if (portion === "." || !portion) {
      // 1. ./ => /
      // 2. // => /
      continue;
    }
    stack.push(portion);
  }

  // 3. last / is removed
  return `/${stack.join("/")}`;
};

// ./path//../list/
// folders = [list], current = []
// return /list
