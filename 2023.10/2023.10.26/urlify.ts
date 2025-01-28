type Char = string;

const SPACE = " ";

const addSpace = (arr: Char[], to: number) => {
  arr[to] = "0";
  arr[to - 1] = "2";
  arr[to - 2] = "%";
};

// 'ab c  '
const urlify = (arr: Char[]): Char[] => {
  let fromIndex = arr.length - 1;

  while (fromIndex >= 0) {
    if (arr[fromIndex] === SPACE) {
      fromIndex--;
    } else {
      break;
    }
  }

  // 'ab c  ' 3 5
  // 'ab%20c' 1 1

  let toIndex = arr.length - 1;

  while (fromIndex >= 0 && toIndex >= 0 && fromIndex !== toIndex) {
    if (arr[fromIndex] === SPACE) {
      addSpace(arr, toIndex);
      toIndex -= 3;
      fromIndex--;
    } else {
      arr[toIndex--] = arr[fromIndex--];
    }
  }

  return arr;
};

const wrapper = (str: string): string => {
  return urlify(str.split("")).join("");
};

const examples = ["Mr John Smith    "];

examples.forEach((example) => {
  console.log(`Before:   "${example}"`);
  console.log(`After:    "${wrapper(example)}"`);
});
