function romanToInt(s: string): number {
  let n = 0,
    i = 0;

  while (i < s.length) {
    if (s[i] === "I") {
      if (["V", "X"].includes(s[i + 1])) {
        n -= 1;
      } else {
        n += 1;
      }
    } else if (s[i] === "V") {
      n += 5;
    } else if (s[i] === "X") {
      if (["L", "C"].includes(s[i + 1])) {
        n -= 10;
      } else {
        n += 10;
      }
    } else if (s[i] === "L") {
      n += 50;
    } else if (s[i] === "C") {
      if (["D", "M"].includes(s[i + 1])) {
        n -= 100;
      } else {
        n += 100;
      }
    } else if (s[i] === "D") {
      n += 500;
    } else if (s[i] === "M") {
      n += 1000;
    }

    i++;
  }

  return n;
}
