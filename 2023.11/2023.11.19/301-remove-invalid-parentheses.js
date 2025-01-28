const findUnmatchedParantheses = (s) => {
  let left = 0;
  let right = 0;

  for (const ch of s) {
    if (ch === "(") {
      left++;
    } else if (ch === ")") {
      if (left === 0) {
        right++;
      } else {
        left--;
      }
    }
  }

  return [left, right];
};

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  const answer = new Set();

  const [unmatchedLeft, unmatchedRight] = findUnmatchedParantheses(s);

  const backtrack = ({
    index,
    leftCount,
    rightCount,
    path,
    removeLeftCount,
    removeRightCount,
  }) => {
    if (removeLeftCount > unmatchedLeft) {
      return;
    }

    if (removeRightCount > unmatchedRight) {
      return;
    }

    if (index === s.length) {
      if (removeLeftCount === 0 && removeRightCount === 0) {
        answer.add(path.join(""));
      }
    } else {
      const ch = s[index];

      if (
        (ch === "(" && removeLeftCount > 0) ||
        (ch == ")" && removeRightCount > 0)
      ) {
        backtrack({
          index: index + 1,
          leftCount,
          rightCount,
          path,
          removeLeftCount: removeLeftCount - (ch === "(" ? 1 : 0),
          removeRightCount: removeRightCount - (ch === ")" ? 1 : 0),
        });
      }

      path.push(ch);

      if (ch === "(") {
        backtrack({
          index: index + 1,
          leftCount: leftCount + 1,
          rightCount,
          path,
          removeLeftCount,
          removeRightCount,
        });
      } else if (ch === ")") {
        if (leftCount > rightCount) {
          backtrack({
            index: index + 1,
            leftCount,
            rightCount: rightCount + 1,
            path,
            removeLeftCount,
            removeRightCount,
          });
        }
      } else {
        backtrack({
          index: index + 1,
          leftCount,
          rightCount,
          path,
          removeLeftCount,
          removeRightCount,
        });
      }

      path.pop();
    }
  };

  backtrack({
    index: 0,
    leftCount: 0,
    rightCount: 0,
    path: [],
    removeLeftCount: unmatchedLeft,
    removeRightCount: unmatchedRight,
  });

  return [...answer];
};

console.log(removeInvalidParentheses("()())()"));
// console.log(removeInvalidParentheses("(()"));
