const MOD = BigInt(1e9 + 7);

var countBalancedPermutations = function (num) {
  // Solution 1: Bottom-up 2D DP + Combinatorics
  // Time: O(N ^ 2 * S)
  // Space: O(N ^ 2 + N * S)

  //   let sum = 0;
  //   const n = num.length;
  //   const digits = new Array(10).fill(0);
  //   for (const ch of num) {
  //     const digit = Number(ch);
  //     digits[digit]++;
  //     sum += digit;
  //   }

  //   // Cannot find the balance between odd and even
  //   if (sum % 2 !== 0) {
  //     return 0;
  //   }

  //   const halfSum = sum / 2;
  //   const halfLength = Math.floor((n + 1) / 2);

  //   const dp = Array.from({ length: halfLength + 1 }, () =>
  //     Array(halfLength + 1).fill(0n)
  //   );
  //   for (let i = 0; i <= halfLength; i++) {
  //     dp[i][i] = dp[i][0] = 1n;
  //     for (let j = 1; j < i; j++) {
  //       dp[i][j] = (dp[i - 1][j] + dp[i - 1][j - 1]) % MOD;
  //     }
  //   }

  //   const results = new Array(halfSum + 1);
  //   for (let i = 0; i <= halfSum; i++) {
  //     results[i] = new Array(halfLength + 1).fill(0n);
  //   }
  //   results[0][0] = 1n;

  //   let prefixLength = 0;
  //   let totalSum = 0;

  //   // Iterate over all digits (0 to 9) - O(1) time
  //   for (let digit = 0; digit <= 9; digit++) {
  //     prefixLength += digits[digit];
  //     totalSum += digit * digits[digit];

  //     // Iterate over multiple odd lengths (0 to halfLength) - O(N)
  //     for (
  //       let oddLength = Math.min(prefixLength, halfLength);
  //       oddLength >= Math.max(0, prefixLength - (n - halfLength));
  //       oddLength--
  //     ) {
  //       const evenLength = prefixLength - oddLength;

  //       // Iterate over possible sums (0 to halfSum) - O(S)
  //       for (
  //         let currSum = Math.min(totalSum, halfSum);
  //         currSum >= Math.max(0, totalSum - halfSum);
  //         currSum--
  //       ) {
  //         let result = 0n;

  //         // Iterate over possible odd digits used (0 to digits[digit]) - O(N)
  //         for (
  //           let oddDigitsUsed = Math.max(0, digits[digit] - evenLength);
  //           oddDigitsUsed <= Math.min(digits[digit], oddLength) &&
  //           digit * oddDigitsUsed <= currSum;
  //           oddDigitsUsed++
  //         ) {
  //           const ways =
  //             (dp[oddLength][oddDigitsUsed] *
  //               dp[evenLength][digits[digit] - oddDigitsUsed]) %
  //             MOD;

  //           result =
  //             (result +
  //               ((ways *
  //                 results[currSum - digit * oddDigitsUsed][
  //                   oddLength - oddDigitsUsed
  //                 ]) %
  //                 MOD)) %
  //             MOD;
  //         }
  //         results[currSum][oddLength] = result % MOD;
  //       }
  //     }
  //   }

  //   return Number(results[halfSum][halfLength]);

  // Solution 2: Top-down 2D DP + DFS + Combinatorics

  let sum = 0,
    n = num.length;
  const digits = new Array(10).fill(0);
  for (const ch of num) {
    const digit = parseInt(ch);
    digits[digit]++;
    sum += digit;
  }

  // Cannot find the balance between odd and even
  if (sum % 2 !== 0) {
    return 0;
  }

  const halfSum = sum / 2;
  const halfLength = Math.floor((n + 1) / 2);

  const dp = Array.from({ length: halfLength + 1 }, () =>
    Array(halfLength + 1).fill(0n)
  );
  for (let i = 0; i <= halfLength; i++) {
    dp[i][i] = dp[i][0] = 1n;
    for (let j = 1; j < i; j++) {
      dp[i][j] = (dp[i - 1][j] + dp[i - 1][j - 1]) % MOD;
    }
  }

  const prefixLength = new Array(11).fill(0);
  for (let i = 9; i >= 0; i--) {
    prefixLength[i] = prefixLength[i + 1] + digits[i];
  }

  const results = Array.from({ length: 10 }, () => new Array(halfSum + 1));
  for (let index = 0; index < 10; index++) {
    for (let currentSum = 0; currentSum <= halfSum; currentSum++) {
      results[index][currentSum] = new Array(halfLength + 1).fill(-1n);
    }
  }

  const dfs = (digit, currentSum, oddLength) => {
    if (oddLength < 0) return 0n;
    if (prefixLength[digit] < oddLength) return 0n;
    if (currentSum > halfSum) return 0n;

    if (digit > 9) {
      return currentSum === halfSum && oddLength === 0 ? 1n : 0n;
    }
    if (results[digit][currentSum][oddLength] !== -1n) {
      return results[digit][currentSum][oddLength];
    }

    const evenLength = prefixLength[digit] - oddLength;

    let result = 0n;
    const start = Math.max(0, digits[digit] - evenLength);
    const end = Math.min(digits[digit], oddLength);
    for (let i = start; i <= end; i++) {
      /* The current digit is filled with i positions at odd positions, and cnt[pos] - i positions at even positions */
      const ways = (dp[oddLength][i] * dp[evenLength][digits[digit] - i]) % MOD;
      result =
        (result +
          ((ways * dfs(digit + 1, currentSum + i * digit, oddLength - i)) %
            MOD)) %
        MOD;
    }
    results[digit][currentSum][oddLength] = result;
    return result;
  };

  return Number(dfs(0, 0, halfLength));
};

console.log(countBalancedPermutations("123")); // 2
console.log(countBalancedPermutations("112")); // 1
console.log(countBalancedPermutations("12345")); // 0
