export {};

const Parser = {
  Array: {
    decode: (str: string) => str.split(","),
    encode: (arr: string[]) => arr.join(","),
  },
  Element: {
    decode: (str: string) => {
      let encoded = BigInt(str);
      let decodedArray: string[] = [];
      while (encoded > 0) {
        const code = encoded % 256n;
        decodedArray.push(String.fromCharCode(Number(code)));
        encoded = (encoded - code) / 256n;
      }
      return decodedArray.reverse().join("");
    },
    encode: (str: string) => {
      let encoded = 1n;

      for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        // 0 to 255 = 2 ** 8
        const code = ch.charCodeAt(0);

        encoded = encoded * 256n + BigInt(code);
      }

      return encoded.toString();
    },
  },
};

/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
  return Parser.Array.encode(strs.map((str) => Parser.Element.encode(str)));
}

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
  return Parser.Array.decode(s).map((encodedString) =>
    Parser.Element.decode(encodedString)
  );
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

const examples: string[][] = [["Hello", "World"]];

examples.forEach((example) => {
  console.log(`Input:     [${example}]`);
  const encoded = encode(example);
  console.log(`Encoded:   ${encoded}`);
  const decoded = decode(encoded);
  console.log(`Decoded:   [${decoded}]`);
});
