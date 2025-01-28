export {};

const checkPermutation = (
  map1: Map<string, number>,
  map2: Map<string, number>
): boolean => {
  if (map1.size !== map2.size) {
    return false;
  }

  for (const key of map2.keys()) {
    const count1 = map1.get(key);
    const count2 = map2.get(key);

    if (count1 !== count2) {
      return false;
    }
  }

  return true;
};

const updateHashMap = (
  map: Map<string, number>,
  removed: string,
  added: string
): void => {
  const count = (map.get(removed) || 0) - 1;
  if (count === 0) {
    map.delete(removed);
  } else {
    map.set(removed, count);
  }
  map.set(added, (map.get(added) || 0) + 1);
};

const getHashMap = (
  str: string,
  start = 0,
  end = str.length
): Map<string, number> => {
  const hashMap = new Map<string, number>();
  for (let i = start; i < end; i++) {
    const ch = str[i];
    hashMap.set(ch, (hashMap.get(ch) || 0) + 1);
  }
  return hashMap;
};

// ab, dba
// ab={a:1,b:1}
// db={d:1,b:1}
// start=1, end=3
// ba={b:1,a:1}

// S1 - s1.length
// S2 - s2.length
// O(S1 * (S2 - S1)) time
function checkInclusion(s1: string, s2: string): boolean {
  const hashMap = getHashMap(s1);
  const anotherHashMap = getHashMap(s2, 0, s1.length);

  if (checkPermutation(hashMap, anotherHashMap)) {
    return true;
  }

  for (let start = 1; start < s2.length + 1 - s1.length; start++) {
    let end = start + s1.length;

    // O(1)
    updateHashMap(anotherHashMap, s2[start - 1], s2[end - 1]);

    if (checkPermutation(hashMap, anotherHashMap)) {
      return true;
    }
  }

  return false;
}

console.log(checkInclusion("ab", "dba"));
