/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  // Solution 1: Count Hash Map + Max
  // Time: O(N)
  // Space: O(N)

  const countMap = {};
  for (let i = 0; i < arr.length; i++) {
    countMap[arr[i]] = (countMap[arr[i]] || 0) + 1;
  }

  let luckyInteger = -1;
  for (const entry of Object.entries(countMap)) {
    const num = Number(entry[0]);
    const count = entry[1];

    if (num === count) {
      luckyInteger = Math.max(luckyInteger, num);
    }
  }

  return luckyInteger;

  // Solution 2: Sort + Linear Scan Max
  // Time: O(N * logN)
  // Space: O(N)

  //   arr.sort((a, b) => b - a);

  //   let i = 0;
  //   while (i < arr.length) {
  //     let count = 1;
  //     while (i + 1 < arr.length && arr[i] === arr[i + 1]) {
  //       count++;
  //       i++;
  //     }
  //     if (arr[i] === count) {
  //       return arr[i];
  //     }
  //     i++;
  //   }

  //   return -1;
};

console.log(findLucky([2, 2, 3, 4])); // 2
console.log(findLucky([1, 2, 2, 3, 3, 3])); // 3
console.log(findLucky([2, 2, 2, 3, 3])); // -1
