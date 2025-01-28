// more than 32bits
const createBitVector = () => {
  let n = 0n;

  return {
    get(pos: number): boolean {
      return (n & (1n << BigInt(pos))) !== 0n;
    },
    set(pos: number) {
      n |= BigInt(1 << pos);
    },
  };
};

// 1. ascii or unicode string
// 1.1. if ascii only, we can use a fixed
const hasAllUniqueCharacters = (str: string): boolean => {
  // 1. additional data structures, hashmap
  //   const hashMap: Record<string, number> = {};
  //   for (let i = 0; i < str.length; i++) {
  //     let ch = str[i];
  //     hashMap[ch] = (hashMap[ch] || 0) + 1;
  //     if (hashMap[ch] > 1) {
  //       return false;
  //     }
  //   }
  //   return true;
  // 2. bit vector
  const bitVector = createBitVector();
  for (let i = 0; i < str.length; i++) {
    let charCode = str[i].charCodeAt(0);
    if (bitVector.get(charCode)) {
      return false;
    }
    bitVector.set(charCode);
  }
  return true;
  // 3. no additional data structures O(N ** 2)
  //   for (let i = 0; i < str.length; i++) {
  //     let ch = str[i];
  //     if (str.indexOf(ch) !== i) {
  //       return false;
  //     }
  //   }
  //   return true;
  // 4. no additional data structures + modify a string O(N * logN)
  //   We can argue that JS doesn't have a way to sort the string without extra space so this option isn't available
  //   str = [...str].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
  //   for (let i = 1; i < str.length; i++) {
  //     if (str[i] === str[i - 1]) {
  //       return false;
  //     }
  //   }
  //   return true;
};

console.log(hasAllUniqueCharacters("abc"));
console.log(hasAllUniqueCharacters("aa"));
