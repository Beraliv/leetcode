class Solution:
    def kthCharacter(self, k: int) -> str:
        # Solution: Binary Search + Count
        # Time: O(logN)
        # Space: O(1)

        n = 256
        count = 0

        while k > 1:
          if n < k:
              k -= n
              count += 1
          n = n / 2

        count = count % 26

        return chr(ord('a') + count)

print(Solution().kthCharacter(1))  # a
print(Solution().kthCharacter(2))  # b
print(Solution().kthCharacter(3))  # b
print(Solution().kthCharacter(4))  # c
print(Solution().kthCharacter(5))  # b
print(Solution().kthCharacter(6))  # c
print(Solution().kthCharacter(7))  # c
print(Solution().kthCharacter(8))  # d
