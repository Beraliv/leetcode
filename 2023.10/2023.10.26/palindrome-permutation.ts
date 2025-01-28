export {};

// 1. tact
// {t:2,a:1,c:1}
// odd: 0, 1, 2

const palindromePermutation = (str: string): boolean => {
  let map = new Map<string, number>();

  for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();

    map.set(ch, (map.get(ch) || 0) + 1);
  }

  let foundOdd = false;
  for (const count of map.values()) {
    if (count % 2 === 1) {
      if (foundOdd) {
        return false;
      }

      foundOdd = true;
    }
  }

  return true;
};

const examples = ["tact"];

examples.forEach((example) => {
  console.log(
    `"${example}" can${
      palindromePermutation(example) ? " " : "not "
    }be palindrome`
  );
});
