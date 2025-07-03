MOD = 1000000007

class Solution:
    def possibleStringCount(self, word: str, k: int) -> int:
        # Solution: Frequency Count + DP 1D
        # Time: O(N + K ^ 2)
        # Space: O(K)

        count = 1
        frequencies = []
        for i in range(1, len(word)):
            if word[i] == word[i - 1]:
                count += 1
            else:
                frequencies.append(count)
                count = 1
        frequencies.append(count)

        allCombinations = 1
        for frequency in frequencies:
            allCombinations = (allCombinations * frequency) % MOD

        if len(frequencies) >= k:
            return allCombinations

        g = [1] * k

        for i in range(len(frequencies)):
            f = [0] * k
            for j in range(1, k):
                f[j] = g[j - 1]
                if j - frequencies[i] - 1 >= 0:
                    f[j] = (f[j] - g[j - frequencies[i] - 1]) % MOD

            gNext = [f[0]] + [0] * (k - 1)
            for j in range(1, k):
                gNext[j] = (gNext[j - 1] + f[j]) % MOD

            g = gNext

        return (allCombinations - g[k - 1]) % MOD
    

print(Solution().possibleStringCount("aabbccdd", 7))  # 5
print(Solution().possibleStringCount("aabbccdd", 8))  # 1
print(Solution().possibleStringCount("aaabbb", 3))    # 8
