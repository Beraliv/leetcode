import heapq
from typing import List

class Solution:
    def maxEvents(self, events: List[List[int]]) -> int:
        max_day = max(end for _, end in events)
        events.sort(key = lambda x: x[0])
        max_end_day_heap = []
        count = 0
        day = 0
        for start_day in range(1, max_day + 1):
            while day < len(events) and events[day][0] <= start_day:
                heapq.heappush(max_end_day_heap, events[day][1])
                day += 1
            while max_end_day_heap and max_end_day_heap[0] < start_day:
                heapq.heappop(max_end_day_heap)
            if max_end_day_heap:
                heapq.heappop(max_end_day_heap)
                count += 1
            if day >= len(events) and not max_end_day_heap:
                break
        return count
    
print(Solution().maxEvents([[1, 2], [2, 3], [3, 4]]))  # 3
print(Solution().maxEvents([[1, 2], [2, 3], [3, 4], [1, 2]]))  # 4
print(Solution().maxEvents([[1, 2], [1, 2], [3, 3], [1, 5], [1, 5]]))  # 5
print(Solution().maxEvents([[1, 10], [2, 2], [2, 2], [2, 2], [2, 2]]))  # 2
