from typing import List

class Solution:
  def kthCharacter(self, k: int, operations: List[int]) -> str:
    # Solution: Binary Search + Count
    # Time: O(logK)
    # Space: O(1)
    
    n = 2 ** len(operations)
    if k > n:
      return '?'
    n = n / 2
    count = 0
    for i in range(len(operations) - 1, -1, -1):
      if k == 1:
        break
      if n < k:
        k -= n
        count += operations[i]
      n /= 2

    return chr(ord('a') + count % 26)

print(Solution().kthCharacter(3, [0, 0, 0]))  # 'a'
print(Solution().kthCharacter(10, [0, 1, 0, 1])) # 'b'
print(Solution().kthCharacter(2, [1])) # 'b'
print(Solution().kthCharacter(3, [1])) # '?'
