// [2, 2, 3] => [1, 1, 2]
// [5, 10] => [1, 2]

// best conceivable runtime - O(N), where N is arr.length
function arrayRankTransform(arr: number[]): number[] {
  if (arr.length === 0) {
    return [];
  }

  const sortedArr = [...arr].sort((a, b) => a - b);

  const hashMap = new Map<number, number>();
  hashMap.set(sortedArr[0], 1);
  let rank = 2;

  for (let i = 1; i < sortedArr.length; i++) {
    const element = sortedArr[i];
    if (hashMap.has(element)) {
      continue;
    } else {
      hashMap.set(element, rank++);
    }
  }

  let answer = Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    answer[i] = hashMap.get(arr[i])!;
  }

  return answer;
}

// [2, 3, 2]
// [2, 2, 3]
// i = 0, {2: 1}
// i = 1
// i = 2, {2: 1, 3: 2}
// [1, 2, 1]
// O(N * logN) time, O(N) space
