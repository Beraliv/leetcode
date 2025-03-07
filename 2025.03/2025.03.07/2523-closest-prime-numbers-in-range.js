// const getPrimeNumbers = (lower, upper) => {
//   if (lower === upper) {
//     return [];
//   }

//   let n = upper - lower + 1;
//   const sieve = Array(upper + 1).fill(true);
//   sieve[0] = false;
//   sieve[1] = false;

//   for (let i = 2; i * i <= upper; i++) {
//     if (sieve[i] === true) {
//       let j = i * i;

//       while (j < lower) {
//         j += i;
//       }

//       while (j <= upper) {
//         sieve[j] = false;
//         j += i;
//       }
//     }
//   }

//   const prime = [];
//   for (let i = lower; i <= upper; i++) {
//     if (sieve[i]) {
//       prime.push(i);
//     }
//   }

//   return prime;
// };

const isPrime = (n) => {
  if (n === 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  // Solution 1: Sieve of Eratosthenes
  // Time: O(R * log(log(R)) + R - L)
  // Space: O(R)
  //   const primes = getPrimeNumbers(left, right);
  //   let answer = [-1, -1];
  //   let minDist = Infinity;
  //   let lastPrime = -1;
  //   for (const prime of primes) {
  //     if (lastPrime !== -1) {
  //       const dist = prime - lastPrime;
  //       if (dist < minDist) {
  //         minDist = dist;
  //         answer[0] = lastPrime;
  //         answer[1] = prime;
  //       }
  //     }
  //     lastPrime = prime;
  //   }
  //   return answer;

  // Solution 2: Check prev prime
  // Time: O((R - L) * R ** 1/2)
  // Space: O(1)
  let prevPrime = -1,
    minDiff = Infinity,
    answer = [-1, -1];

  for (let i = left; i <= right; i++) {
    if (isPrime(i)) {
      if (prevPrime !== -1) {
        const diff = i - prevPrime;
        if (diff < minDiff) {
          minDiff = diff;
          answer[0] = prevPrime;
          answer[1] = i;
        }
        if (minDiff <= 2) {
          return answer;
        }
      }
      prevPrime = i;
    }
  }

  return answer;
};

console.log(closestPrimes(10, 19)); // [11, 13]
console.log(closestPrimes(4, 6)); // [-1, -1]
console.log(closestPrimes(1, 2)); // [-1, -1]
console.log(closestPrimes(19, 31)); // [29, 31]
