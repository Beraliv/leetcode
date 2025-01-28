/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const folders = [];
  let current = [];

  const processCurrent = () => {
    const str = current.join("");

    if (str === ".") {
      // 1. ./ => /
    } else if (str === "..") {
      // 4. path/../ => /
      if (folders.length > 0) {
        folders.pop();
      }
    } else {
      // 0. path/
      folders.push(str);
    }

    current.length = 0;
  };

  for (const ch of path) {
    // 2. // => /
    if (ch === "/" && current.length > 0) {
      processCurrent();
    } else if (ch !== "/") {
      current.push(ch);
    }
  }

  // no / at the end
  if (current.length > 0) {
    processCurrent();
  }

  // 3. last / is removed
  return `/${folders.join("/")}`;
};

// ./path//../list/
// folders = [list], current = []
// return /list
