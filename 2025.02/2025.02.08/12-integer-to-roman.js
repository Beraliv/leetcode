/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let output = "";
  const pairs = [
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"],
  ];

  for (let i = pairs.length - 1; i >= 0; i--) {
    const [key, roman] = pairs[i];
    const remainder = num % key;
    const times = (num - remainder) / key;
    output += roman.repeat(times);
    num = remainder;
  }

  return output;
};

console.log(`>>> ${intToRoman("409")} erat finis imperii Romani in Britannia`);
console.log(`>>> Ego natus sum in ${intToRoman("1994")}`);
console.log(`>>> Romani maiorem numerum non habent ${intToRoman("3999")}`);
