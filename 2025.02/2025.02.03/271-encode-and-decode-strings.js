const toEscaped = (str) => str.replace(/\//g, "//");

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  // Time: O(N), N = total number of characters
  // Space: O(K), K = total number of strings

  const encoded = [];

  for (const str of strs) {
    encoded.push(toEscaped(str));
  }

  return encoded.join("/:");
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  // Time: O(N), N = total number of characters
  // Space: O(K), K = total number of strings

  let decoded = [];
  let str = [];

  let i = 0;
  while (i < s.length) {
    if (i + 1 < s.length && s[i] === "/" && s[i + 1] === "/") {
      str.push("/");
      i += 2;
    } else if (i + 1 < s.length && s[i] === "/" && s[i + 1] === ":") {
      decoded.push(str.join(""));
      str.length = 0;
      i += 2;
    } else {
      str.push(s[i]);
      i++;
    }
  }

  decoded.push(str.join(""));
  str.length = 0;

  return decoded;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

const test = (strs) => {
  const encoded = encode(strs);
  const decoded = decode(encoded);
  console.log(`${strs} => ${encoded} => ${decoded}`);
};

test(["Hello", "World"]);
test(["Hello", "Wor/:ld"]);
test(["", ""]);
test(["/", ""]);
test(["//", ""]);
