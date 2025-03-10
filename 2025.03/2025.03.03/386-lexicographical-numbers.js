/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  // Solution 1. Sort array
  // Time: O(N * logN)
  // Space: O(logN)

  //   const nums = new Array(n);
  //   for (let i = 0; i < n; i++) {
  //     nums[i] = i + 1;
  //   }
  //   return nums.sort();

  // Solution 2: Array + DFS
  // Time: O(N)
  // Space: O(N)

  //   const answer = [];

  //   const dfs = (curr) => {
  //     if (curr > n) {
  //       return;
  //     }
  //     if (curr <= n) {
  //       answer.push(curr);
  //     }

  //     dfs(curr * 10);
  //     if (curr % 10 === 0) {
  //       for (let i = 1; i < 10; i++) {
  //         dfs(curr + i);
  //       }
  //     }
  //   };

  //   for (let v = 1; v < 10; v++) {
  //     dfs(v);
  //   }

  //   return answer;

  // Solution 3: Iterative DFS
  // Time: O(N)
  // Space: O(1)

  const answer = Array(n).fill(0);
  let current = 1;

  for (let i = 0; i < n; i++) {
    answer[i] = current;

    if (current * 10 <= n) {
      current *= 10;
    } else {
      // number = 394, n = 394, 394 => 4
      // number = 399, n = 500, 399 => 4
      while (current % 10 === 9 || current === n) {
        const remainder = current % 10;
        current = (current - remainder) / 10;
      }
      current++;
    }
  }

  return answer;
};

console.log(lexicalOrder(12)); // [1,10,11,12,13,2,3,4,5,6,7,8,9]
console.log(lexicalOrder(35));
