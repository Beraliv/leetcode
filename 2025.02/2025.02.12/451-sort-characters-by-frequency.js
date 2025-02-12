import { StringBuilder } from "../../_util/stringBuilder";

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  // Solution 1: StringBuilder + 2 Sorts
  // Time: O(N * logN)
  // Space: O(N)

  // // 1. sort characters
  // const characters = s.split("").sort();
  // // 2. merge identical characters
  // const mergedCharacters = [];
  // let currentString = new StringBuilder();
  // currentString.append(characters[0]);
  // for (let i = 1; i < characters.length; i++) {
  //   if (characters[i] !== characters[i - 1]) {
  //     mergedCharacters.push(currentString.toString());
  //     currentString = new StringBuilder();
  //   }
  //   currentString.append(characters[i]);
  // }
  // mergedCharacters.push(currentString.toString());
  // return (
  //   mergedCharacters
  //     // 3. sort strings by length
  //     .sort((a, b) => b.length - a.length)
  //     // 4. concatenate
  //     .join("")
  // );

  // Solution 2: HashMap + Sort
  // Time: O(N * logN) or O(N + K * logK), where K is a number of unique characters
  // Space: O(N)

  // const freqMap = new Map();
  // for (const ch of s) {
  //   freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
  // }

  // return [...freqMap.keys()]
  //   .sort((k1, k2) => freqMap.get(k2) - freqMap.get(k1))
  //   .map((key) => key.repeat(freqMap.get(key)))
  //   .join("");

  // Solution 3: MultiSet + Bucket Sort
  // Time: O(N)
  // Space: O(N)

  let maxFreq = 0;
  const freqMap = new Map();
  for (const ch of s) {
    const freq = (freqMap.get(ch) || 0) + 1;
    maxFreq = Math.max(maxFreq, freq);
    freqMap.set(ch, freq);
  }

  const buckets = Array.from({ length: maxFreq + 1 }, () => []);
  for (const key of freqMap.keys()) {
    const freq = freqMap.get(key);
    buckets[freq].push(key);
  }

  const answerString = new StringBuilder();
  for (let i = maxFreq; i >= 0; i--) {
    for (const key of buckets[i]) {
      answerString.append(key.repeat(freqMap.get(key)));
    }
  }

  return answerString.toString();
};
