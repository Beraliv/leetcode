type Account = [name: string, ...emails: string[]];

// [john, 1, 2, 3]
// [mary, 4],
// [johny, 2, 5]

// result = [[john, 1, 2, 3, 5], [mary, 4]]
// map = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
// emails = [2, 5]
// index = 1

// K - the maximum length of an account
// N - total number of accounts (including repetitive before merging)

// 30m
function accountsMerge(accounts: Account[]): Account[] {
  // O(N * K) space
  // Map<index, email>
  const indexMap = new Map<number, Set<string>>();
  // O(N * K) space
  // Map<email, index>
  const emailMap = new Map<string, number>();

  // O(N * K) time
  for (let i = 0; i < accounts.length; i++) {
    const [_, ...emails] = accounts[i];
    indexMap.set(i, new Set<string>(emails));

    let intersectedIndices = new Set<number>();
    for (const email of emails) {
      if (emailMap.has(email)) {
        const j = emailMap.get(email)!;
        intersectedIndices.add(i);
        intersectedIndices.add(j);
      } else {
        emailMap.set(email, i);
      }
    }

    if (intersectedIndices.size !== 0) {
      const minimumIndex = Math.min(...intersectedIndices);
      const mergedEmails = indexMap.get(minimumIndex)!;
      for (const index of intersectedIndices) {
        if (index !== minimumIndex) {
          // merge it to minimumIndex
          const emails = indexMap.get(index)!;
          for (const email of emails) {
            mergedEmails.add(email);
            emailMap.set(email, minimumIndex);
          }
          indexMap.delete(index);
        }
      }
      indexMap.set(minimumIndex, mergedEmails);
    }
  }

  // O(N * K * log(N * K))
  const mergedResults: Account[] = [];
  for (const [index, setOfEmails] of indexMap.entries()) {
    const [name] = accounts[index];
    const sortedEmails: string[] = [...setOfEmails].sort();
    mergedResults.push([name, ...sortedEmails]);
  }

  return mergedResults;
}

// John 1 2
// John 3 4
// John 2 3 5

// map1 = {0: [1, 2, 3, 4, 5]}
// map = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}

// result => John 1 2 3 4
