const MAP = {
  2: "abc".split(""),
  3: "def".split(""),
  4: "ghi".split(""),
  5: "jkl".split(""),
  6: "mno".split(""),
  7: "pqrs".split(""),
  8: "tuv".split(""),
  9: "wxyz".split(""),
};

/**
 * 10m
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // Solution 1. Iterative but a lot of space consumption
  //   if (digits.length === 0) {
  //     return [];
  //   }

  //   let combinations = [""];

  //   for (const digit of digits) {
  //     const letters = MAP[digit];

  //     combinations = combinations.flatMap((combination) =>
  //       letters.map((letter) => `${combination}${letter}`)
  //     );
  //   }

  //   return combinations;
  // Solution 2.

  if (digits.length === 0) {
    return [];
  }

  let combinations = [];

  const backtrack = (path, index) => {
    if (index === digits.length) {
      combinations.push(path.join(""));
      return;
    }

    const letters = MAP[digits[index]];

    for (const letter of letters) {
      path.push(letter);
      backtrack(path, index + 1);
      path.pop();
    }
  };

  backtrack([], 0);

  return combinations;
};

// 23
// combinations = [ad, bd, cd, ae, be, ce, af, bf, cf]
// returns [ad, bd, cd, ae, be, ce, af, bf, cf]

console.log(letterCombinations("23"));
