// Solution 1: My solution - very explicit
// const allowSymbol = (check) => {
//   if (check.e) {
//     if (check.eBase) {
//       // symbol cannot stay after base
//       return false;
//     } else if (check.eSign) {
//       // two e signs
//       return false;
//     } else {
//       check.eSign = true;
//     }
//   } else if (check.integer) {
//     // symbol cannot stay after integer
//     return false;
//   } else if (check.dot) {
//     // symbol cannot stay after dot part
//     return false;
//   } else if (check.float) {
//     // symbol cannot stay after float part
//     return false;
//   } else {
//     if (check.sign) {
//       // two signs
//       return false;
//     } else {
//       check.sign = true;
//     }
//   }
// };

// const allowDot = (check) => {
//   if (check.e) {
//     // no e dots support
//     return false;
//   } else if (check.dot) {
//     // two dots
//     return false;
//   } else {
//     check.dot = true;
//   }
// };

// const allowE = (check) => {
//   if (check.integer || check.float) {
//     if (check.e) {
//       // two e
//       return false;
//     } else {
//       check.e = true;
//     }
//   } else {
//     // cannot have e part without integer or float
//     return false;
//   }
// };

// const allowDigit = (check) => {
//   if (check.e) {
//     check.eBase = true;
//   } else if (check.dot) {
//     check.float = true;
//   } else {
//     check.integer = true;
//   }
// };

// const decisionMaker = [
//   (ch) => (ch === "-" ? allowSymbol : null),
//   (ch) => (ch === "+" ? allowSymbol : null),
//   (ch) => (ch === "." ? allowDot : null),
//   (ch) => (ch === "e" ? allowE : null),
//   (ch) => (/\d/.test(ch) ? allowDigit : null),
//   () => () => false,
// ];

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isNumber = function (s) {
//   // 1. sign (optional)
//   // 2. integer part (before dot, optional)
//   // 3. dot (optional)
//   // 4. float part (optional)
//   // integer + dot or dot + float is mandatory
//   // 5. e character (optional)
//   // 6. eSign (optional)
//   // 7. eBase (optional)
//   // e character + eSign + eBase or echaracter + eBase are manadatory

//   const check = {
//     sign: false,
//     integer: false,
//     dot: false,
//     float: false,
//     e: false,
//     eSign: false,
//     eBase: false,
//   };

//   for (const ch of s) {
//     for (const decision of decisionMaker) {
//       const allowCh = decision(ch.toLowerCase());
//       if (allowCh !== null) {
//         const result = allowCh(check);
//         if (typeof result === "boolean") {
//           return result;
//         }
//         break;
//       }
//     }
//   }

//   const validNumber =
//     check.integer || (check.integer && check.dot) || (check.dot && check.float);
//   if (!validNumber) {
//     return false;
//   }

//   const validE = !check.e || (check.e && check.eBase);
//   if (!validE) {
//     return false;
//   }

//   return true;
// };

// Solution 2: recursive
// Time: O(N)
// Space: O(1), given tail recursion is optimised, or O(N) if not optimised
const isAlpha = (ch) => /[a-zA-Z]/.test(ch);
const isDigit = (ch) => /\d/.test(ch);

const isNumber = function (s) {
  const isValidInteger = (startIndex) => {
    let i = startIndex;

    if (i >= s.length) {
      return false;
    }

    const checks = {
      dot: false,
      number: false,
    };

    if (["-", "+"].includes(s[i])) {
      i++;
    }

    while (i < s.length) {
      const ch = s[i];

      if (!isDigit(ch)) {
        return false;
      } else {
        checks.number = true;
      }

      i++;
    }

    return checks.number;
  };

  const isValidNumber = (startIndex) => {
    const checks = {
      dot: false,
      number: false,
    };

    let i = startIndex;

    if (["-", "+"].includes(s[i])) {
      i++;
    }

    while (i < s.length) {
      const ch = s[i];

      if (isAlpha(ch)) {
        if (!["e", "E"].includes(ch)) {
          return false;
        }

        return checks.number && isValidInteger(i + 1);
      } else if (ch === ".") {
        if (checks.dot) {
          return false;
        } else {
          checks.dot = true;
        }
      } else if (["-", "+"].includes(ch)) {
        return false;
      } else {
        checks.number = true;
      }

      i++;
    }

    return checks.number;
  };

  return isValidNumber(0);
};

// const SIGNS = ["-", "+"];
// const E_SIGNS = ["e", "E"];

// const dfa = [
//   // 0: empty state
//   { sign: 1, digit: 2, dot: 3 },
//   // 1: sign
//   { digit: 2, dot: 3 },
//   // 2: integer
//   { digit: 2, dot: 4, e: 5 },
//   // 3: dot
//   { digit: 4 },
//   // 4: float
//   { digit: 4, e: 5 },
//   // 5: e
//   { sign: 6, digit: 7 },
//   // 6: sign
//   { digit: 7 },
//   // 7: base
//   { digit: 7 },
// ];

// const FINAL_STATES = [2, 4, 7];

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isNumber = function (s) {
//   let state = 0;
//   for (const ch of s) {
//     let group;
//     if (/\d/.test(ch)) {
//       group = "digit";
//     } else if (SIGNS.includes(ch)) {
//       group = "sign";
//     } else if (ch === ".") {
//       group = "dot";
//     } else if (E_SIGNS.includes(ch)) {
//       group = "e";
//     } else {
//       return false;
//     }

//     if (!dfa[state]) {
//       return false;
//     }

//     state = dfa[state][group];
//   }

//   return FINAL_STATES.includes(state);
// };
