// case sensitive
//
const checkPermutation = (s1: string, s2: string): boolean => {
  if (s1.length !== s2.length) {
    return false;
  }

  const map = new Map<string, number>();

  for (let i = 0; i < s1.length; i++) {
    const ch = s1[i];
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (let i = 0; i < s2.length; i++) {
    let ch = s2[i];
    const times = map.get(ch);
    if (!times) {
      return false;
    }
    if (times === 1) {
      map.delete(ch);
    } else {
      map.set(ch, times - 1);
    }
  }

  return map.size === 0;
};

console.log(checkPermutation("abc", "cba"));
console.log(checkPermutation("abc", "cb"));
console.log(checkPermutation("ab", "cba"));
