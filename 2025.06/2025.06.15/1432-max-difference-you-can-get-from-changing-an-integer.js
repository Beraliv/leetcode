const replace = (str, x, y) => {
  return str.split(x).join(y);
};

/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
  // Solution: String Manipulation
  // Time: O(D), where D is the number of digits in num
  // Space: O(D)

  const numStr = String(num);

  let minNumStr = numStr;
  for (let i = 0; i < numStr.length; i++) {
    const digit = numStr[i];
    if (i === 0) {
      if (digit !== "1") {
        minNumStr = replace(minNumStr, digit, "1");
        break;
      }
    } else {
      if (digit !== "0" && digit !== numStr[0]) {
        minNumStr = replace(minNumStr, digit, "0");
        break;
      }
    }
  }

  let maxNumStr = numStr;
  for (let i = 0; i < numStr.length; i++) {
    const digit = numStr[i];
    if (digit !== "9") {
      maxNumStr = replace(maxNumStr, digit, "9");
      break;
    }
  }

  return parseInt(maxNumStr, 10) - parseInt(minNumStr, 10);
};

console.log(maxDiff(555)); // 888
console.log(maxDiff(9)); // 8
console.log(maxDiff(123456)); // 820000
console.log(maxDiff(111)); // 888
