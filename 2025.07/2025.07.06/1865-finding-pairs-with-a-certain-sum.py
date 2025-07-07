from typing import Counter, List

class FindSumPairs:
    # Solution: 2 Arrays, 1 Counter
    # Time: init - O(N), add - O(1), count - O(M)
    # Space: O(N + M)

    def __init__(self, nums1: List[int], nums2: List[int]):
        self.nums1 = nums1
        self.nums2 = nums2
        self.counts = Counter(nums2)

    def add(self, index: int, val: int) -> None:
        if (self.counts[self.nums2[index]] == 1):
            del self.counts[self.nums2[index]]
        else:
            self.counts[self.nums2[index]] -= 1
        self.nums2[index] += val
        self.counts[self.nums2[index]] += 1

    def count(self, tot: int) -> int:
        count = 0
        for num in self.nums1:
            if (tot - num) in self.counts:
                count += self.counts[tot - num]
        return count
        


# Your FindSumPairs object will be instantiated and called as such:
# obj = FindSumPairs(nums1, nums2)
# obj.add(index,val)
# param_2 = obj.count(tot)


