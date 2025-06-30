from typing import List

class Solution:
  def findLHS(self, nums: List[int]) -> int:
    # Solution 1: Hash Map + 1 Loop + 2 Conditions
    # Time: O(N)
    # Space: O(N)
    # max_length = 0
    # count_obj = {}
    # for num in nums:
    #   count_obj[num] = count_obj.get(num, 0) + 1
    #   if num - 1 in count_obj:
    #     max_length = max(max_length, count_obj[num] + count_obj[num - 1])
    #   if num + 1 in count_obj:
    #     max_length = max(max_length, count_obj[num] + count_obj[num + 1])
    # return max_length

    # Solution 2: Hash Map + 2 Loops + 1 Condition
    # Time: O(N)
    # Space: O(N)
    max_length = 0
    count_obj = {}
    for num in nums:
      count_obj[num] = count_obj.get(num, 0) + 1
    for num in count_obj:
      if num + 1 in count_obj:
        max_length = max(max_length, count_obj[num] + count_obj[num + 1])
    return max_length

print(Solution().findLHS([1, 3, 2, 2, 5, 4, 3, 2]))  # 5
print(Solution().findLHS([1, 2, 3, 4])) # 2
print(Solution().findLHS([1, 1, 1, 1]))  # 0
