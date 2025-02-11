// FYI, transaction = name,time,amount,city, time in minutes
/**
 * @param {string[]} rawTransactions
 * @return {string[]}
 */
var invalidTransactions = function (rawTransactions) {
  // Solution: Parse transactions + mark invalid transactions + map to rawTransactions
  // Time: O(N) + O(N ^ 2) + O(N) = O(N ^ 2)
  // Space: O(N) + O(N) = O(N)

  if (rawTransactions.length === 0) {
    return [];
  }

  const transactions = [];
  for (const transaction of rawTransactions) {
    const [name, timeString, amountString, city] = transaction.split(",");

    transactions.push({
      name,
      timeMinutes: Number(timeString),
      amount: Number(amountString),
      city,
    });
  }

  const invalid = Array(rawTransactions.length).fill(false);
  for (let i = 0; i < transactions.length; i++) {
    const t1 = transactions[i];

    if (t1.amount > 1000) {
      invalid[i] = true;
    }

    for (let j = i + 1; j < transactions.length; j++) {
      const t2 = transactions[j];

      if (
        t1.name === t2.name &&
        Math.abs(t1.timeMinutes - t2.timeMinutes) <= 60 &&
        t1.city !== t2.city
      ) {
        invalid[i] = true;
        invalid[j] = true;
      }
    }
  }

  const output = [];
  for (let i = 0; i < invalid.length; i++) {
    if (invalid[i]) {
      output.push(rawTransactions[i]);
    }
  }

  return output;
};
