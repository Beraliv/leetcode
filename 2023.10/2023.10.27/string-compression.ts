import { createStringBuilder } from "../../_util/createStringBuilder";

const stringCompression = (str: string) => {
  // 1. string concatenation - O(N + K ** 2) time and O(K) space, where N - string length, K - unique symbols
  // 2. string builder - O(N + K) time and O(K) space
  if (str.length <= 1) {
    return str;
  }

  let compressed = createStringBuilder();
  let prevCh = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === prevCh) {
      count++;
    } else {
      compressed.append(prevCh + count);
      prevCh = str[i];
      count = 1;
    }
  }

  compressed.append(prevCh + count);

  const compressedStr = compressed.toString();

  if (compressedStr.length > str.length) {
    return str;
  }

  return compressedStr;
};

console.log(stringCompression("aabcccccaaa"));
