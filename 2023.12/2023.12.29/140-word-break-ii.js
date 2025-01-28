/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);

  const answer = [];

  const dfs = (i, j, words) => {
    if (i >= s.length) {
      answer.push(words.join(" "));
      return;
    }

    const candidate = s.substring(i, j);

    if (j >= s.length) {
      if (wordSet.has(candidate)) {
        words.push(candidate);
        answer.push(words.join(" "));
        words.pop();
      }

      return;
    }

    if (wordSet.has(candidate)) {
      words.push(candidate);
      dfs(j, j + 1, words);
      words.pop();
    }

    dfs(i, j + 1, words);
  };

  dfs(0, 1, []);

  return answer;
};

// s = catsanddog, words = [cats, and, dog, cat, sand]
// answer = ['cat sand dog']
// i = 4, j = 5, words = [cats]
// candidate = cats
