/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  // Solution 1: Brute Force + HashSet
  // Time: O(N ^ 3)
  // Space: O(min(N ^ 3, 10 ^ N))

  // Assume that the answer is larger than 100, so it's more efficient to sort
  // the input array
  //   digits.sort((a, b) => a - b);

  //   let first = 0;
  //   if (digits.length > 0 && digits[0] === 0) {
  //     first++;
  //   }

  //   const result = new Set();
  //   for (; first < digits.length; first++) {
  //     for (let middle = 0; middle < digits.length; middle++) {
  //       if (first !== middle) {
  //         for (let last = 0; last < digits.length; last++) {
  //           if (first !== last && middle !== last && digits[last] % 2 === 0) {
  //             const num =
  //               digits[first] * 100 + digits[middle] * 10 + digits[last];
  //             if (num > 99) {
  //               result.add(num);
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  //   return [...result];

  // Solution 2: 2 Counters + Iteration
  // Time: O(N)
  // Space: O(1)

  const counter = new Array(10).fill(0);
  for (let i = 0; i < digits.length; i++) {
    counter[digits[i]]++;
  }

  const result = [];
  for (let i = 100; i < 1000; i++) {
    const numberCounter = new Array(10).fill(0);
    let num = i,
      isValid = true;
    while (num > 0) {
      let digit = num % 10;
      numberCounter[digit]++;
      if (numberCounter[digit] > counter[digit]) {
        isValid = false;
        break;
      }
      num = Math.floor(num / 10);
    }
    if (isValid && i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
};

console.log(findEvenNumbers([2, 1, 3, 0])); // [102,120,130,132,210,230,302,310,312,320]
console.log(findEvenNumbers([2, 2, 8, 8, 2])); // [222,228,282,288,822,828,882]
console.log(findEvenNumbers([0, 2, 0, 0])); // [200]
