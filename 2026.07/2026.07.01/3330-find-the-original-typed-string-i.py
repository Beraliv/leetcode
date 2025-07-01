class Solution:
    def possibleStringCount(self, word: str) -> int:
        # Solution: Count repeated characters
        # Time: O(N)
        # Space: O(1)

        count = 1
        i = 0
        while i < len(word):
            start = i
            while i + 1 < len(word) and word[i + 1] == word[start]:
                i += 1
            count += i - start
            i += 1
        return count
    
print(Solution().possibleStringCount("abbcccc"))  # 5
print(Solution().possibleStringCount("abcd"))  # 1
print(Solution().possibleStringCount("aaaa"))  # 4
