from bisect import bisect_right
from typing import List

class Solution:
    def maxValue(self, events: List[List[int]], k: int) -> int:
        # Solution: Sort + Top-Down DFS + Memoization
        # Time: O(N * K * flogN)
        # Space: O(N * K)
        
        events.sort(key=lambda x: x[0])
        n = len(events)
        dp = [[0] * (k + 1) for _ in range(n)]
        starts = [start for start, _, _ in events]

        def dfs(index: int, count: int) -> int:
            if count == 0 or index >= n:
                return 0
            if dp[index][count] != 0:
                return dp[index][count]

            next_index = bisect_right(starts, events[index][1])
            dp[index][count] = max(
                dfs(index + 1, count),
                events[index][2] + dfs(next_index, count - 1)
            )
            return dp[index][count]
        
        return dfs(0, k)

print(Solution().maxValue([[1, 2, 4], [3, 4, 3], [2, 3, 1]], 2))  # 7
print(Solution().maxValue([[1, 2, 4], [3, 4, 3], [2, 3, 10]], 2))  # 10
print(Solution().maxValue([[1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4]], 3))  # 9
