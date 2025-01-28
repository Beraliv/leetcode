export {};

// medium
// 20m

const getHash = (str: string): string => {
  return [...str].sort().join("");
};

// S is longest length of a string within str array
// N is str.length
// Best receivable time O(N * S)
// time - O(N * S * logS)
function groupAnagrams(strs: string[]): string[][] {
  // 1. Map<number, string[]>
  const map = new Map<string, string[]>();

  // 2. Iterate over strs
  // O(N * S * logS)
  for (const str of strs) {
    // O(S * logS)
    // 3. Calculate hash
    const hash = getHash(str);

    const values = map.get(hash);
    if (values) {
      values.push(str);
    } else {
      map.set(hash, [str]);
    }
  }

  // 4. Return values of map
  return [...map.values()];
}
