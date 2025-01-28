// easy
// time is 5m40s
// best conceivable runtime is O(N), where N is both S and T length
// best conceivable space is O(1) (O(N))
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let hashMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    hashMap.set(ch, (hashMap.get(ch) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    const ch = t[i];

    const count = (hashMap.get(ch) || 0) - 1;
    if (count < 0) {
      return false;
    }

    hashMap.set(ch, count);
  }

  return true;
}
