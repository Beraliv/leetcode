function hIndex(citations: number[]): number {
  // 1. sort it in descending order, e.g. 5 4 3 2 1
  // 2. iterate again

  citations.sort((a, b) => b - a);

  let i = 0,
    h = 0;

  while (i < citations.length) {
    if (citations[i] >= i + 1) {
      h = i + 1;
      i++;
    } else {
      break;
    }
  }

  return h;
}

// [1, 2, 3, 4, 5]
// [5, 4, 3, 2, 1]
// i = 0, v = 5, 5 >= 1 => h = 1
// i = 1, v = 4, 4 >= 2 => h = 2
// i = 2, v = 3, 3 >= 3 => h = 3
// i = 3, v = 2, 2 >= 4 => break
// return 3
