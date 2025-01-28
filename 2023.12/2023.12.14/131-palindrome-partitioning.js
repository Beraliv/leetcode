const isPalindrome = (s, start, end) => {
  while (start < end) {
    if (s[start] === s[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
};

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const answers = [];

  const backtrack = (answer, start) => {
    if (start >= s.length) {
      answers.push([...answer]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      if (isPalindrome(s, start, end)) {
        answer.push(s.substring(start, end + 1));
        backtrack(answer, end + 1);
        answer.pop();
      }
    }
  };

  backtrack([], 0);

  return answers;
};

// aabacaba
