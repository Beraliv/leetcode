// 1. what happens for empty string
// 2. what happens for string which is unique
// 3. when is the repeated element

function lengthOfLongestSubstring(str: string): number {
  const map = new Map<string, number>();
  let length = 0;
  let leftIndex = 0;

  for (let rightIndex = 0; rightIndex < str.length; rightIndex++) {
    const ch = str[rightIndex];

    if (map.has(ch) && map.get(ch)! >= leftIndex) {
      leftIndex = map.get(ch)! + 1;
    }

    length = Math.max(length, rightIndex - leftIndex + 1);

    map.set(ch, rightIndex);
  }

  return length;
}
