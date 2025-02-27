export {};

// O(N ** 3) solution

// // BCR is O(S), S is length of string s
// function longestPalindrome(s: string): string {
//   // 0. Brute force = O(S ** 3)
//   let palindrome = s[0];

//   // O(S)
//   for (let i = 1; i < s.length; i++) {
//     let prevCh = s[i - 1];
//     let ch = s[i];

//     // odd palindromes

//     let candidate = ch;

//     // O(S ** 2)
//     for (let j = 1; j <= i; j++) {
//       let left = i - j;
//       let right = i + j;
//       if (s[left] === s[right]) {
//         candidate = s[left] + candidate + s[right];
//       } else {
//         break;
//       }
//     }

//     if (candidate.length > palindrome.length) {
//       palindrome = candidate;
//     }

//     // even palindromes

//     if (prevCh === ch) {
//       let candidate = prevCh + ch;

//       for (let j = 1; j <= Math.min(i - 1, s.length - 1 - i); j++) {
//         let left = i - 1 - j;
//         let right = i + j;
//         if (s[left] === s[right]) {
//           candidate = s[left] + candidate + s[right];
//         } else {
//           break;
//         }
//       }

//       if (candidate.length > palindrome.length) {
//         palindrome = candidate;
//       }
//     }
//   }

//   return palindrome;
// }

class Palindrome {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get length() {
    return this.end - this.start;
  }
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // Solution: 1 Iteration + 2 pointers (expand from possible centres)
  // Time: O(N ^ 2)
  // Space: O(1)

  let palindrome = new Palindrome(0, 0);

  for (let i = 0; i < s.length; i++) {
    const oddSize = expand(i, i, s);

    if (oddSize > palindrome.length) {
      const halfSize = (oddSize - 1) / 2;
      palindrome = [i - halfSize, i + halfSize];
    }

    const evenSize = expand(i, i + 1, s);

    if (evenSize > palindrome.length) {
      const halfSize = evenSize / 2 - 1;
      palindrome = new Palindrome(i - halfSize, i + 1 + halfSize);
    }
  }

  return s.substring(palindrome.start, palindrome.end + 1);
};

const expand = (i, j, s) => {
  let left = i;
  let right = j;

  while (left >= 0 && right <= s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return right - left - 1;
};
