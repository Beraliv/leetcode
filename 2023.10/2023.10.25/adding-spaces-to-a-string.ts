export {};

function createStringBuilder() {
  let arr: string[] = [];

  return {
    toString() {
      return arr.join("");
    },
    append(str: string) {
      arr.push(str);
    },
  };
}

function addSpaces(s: string, spaces: number[]): string {
  let stringBuilder = createStringBuilder();

  let i = 0;
  for (let j = 0; j < spaces.length; j++) {
    const k = spaces[j];
    stringBuilder.append(s.substring(i, k));
    stringBuilder.append(" ");
    i = k;
  }

  stringBuilder.append(s.substring(i));

  return stringBuilder.toString();
}
