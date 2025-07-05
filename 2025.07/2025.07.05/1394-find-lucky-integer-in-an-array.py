from collections import Counter
from typing import List

class Solution:
    def findLucky(self, arr: List[int]) -> int:
        counter = Counter(arr)
        lucky_integer = -1
        for (num, count) in counter.items():
            if num == count:
                lucky_integer = max(lucky_integer, num)
        return lucky_integer

print(Solution().findLucky([2, 2, 3, 4]))  # 2
print(Solution().findLucky([1, 2, 2, 3, 3, 3]))  # 3
print(Solution().findLucky([2, 2, 2, 3, 3]))  # -1
