// 16m
// abcde, cdeab
// i = 0, abcde !== cdeab
// i = 1, bcdea !== cdeab
// i = 2, cdeab === cdeab => true

function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }

  // O(N)
  const doubleString = s.concat(s);
  // O(N)
  return doubleString.indexOf(goal) > -1;
}
