## Arrays & Hashing

**HashSet**

- [217. Contains Duplicates](/2025.01/2025.01.29/217-contains-duplicates.js) - HashSet
- [36. Valid Sudoku](/2025.02/2025.02.03/36-valid-sudoku.js) - HashSet
- [128. Longest Consecutive Sequence](/2025.02/2025.02.05/128-longest-consecutive-sequence.js) - Sort + Iteration, or HashSet + Iteration from first element in the chain

**HashMap**

- [242. Valid Anagram](/2025.01/2025.01.29/242-valid-anagram.js) - HashMap
- [1. Two Sum](/2025.01/2025.01.29/1-two-sum.js) - HashMap
- [49. Group Anagrams](/2025.01/2025.01.29/49-group-anagrams.js) - HashMap + Sort
- [1396. Design Underground System](/2025.02/2025.02.02/1396-design-underground-system.js) - HashMap

**Arrays**

- [766. Toeplitz Matrix](/2023.11/2023.11.23/766-toeplitz-matrix.js) - Array + (i, j) vs (i - 1, j - 1)
- [271. Encode and Decode Strings](/2025.02/2025.02.03/271-encode-and-decode-strings.js) - Array + Escaping
- [238. Product of Array Except Self](/2025.02/2025.02.03/238-product-of-array-except-self.js) - Array + 2 accumulators
- [1570. Dot Product of Two Sparse Vectors](/2023.11/2023.11.19/1570-dot-product-of-two-sparse-vectors.js) - HashMap, or Array + 2 pointers

## 2 pointers

- [125. Valid Palindrome](/2025.02/2025.02.06/125-valid-palindrome.js) - 2 pointers
- [167. Two Sum II - Input Array Is Sorted](/2023.11/2023.11.14/167-two-sum-ii-input-array-is-sorted.js) - 2 pointers
- [15. 3Sum](/2025.02/2025.02.06/15-3sum.js) - Sort + Linear search + 2 pointers
- [11. Container With Most Water](/2025.02/2025.02.06/11-container-with-most-water.js) - 2 pointers + leftMax/rightMax
- [42. Trapping Rain Water](/2025.02/2025.02.06/42-trapping-rain-water.js) - Stack, or 2 pointers

## Stack

- [20. Valid Parentheses](/2025.02/2025.02.06/20-valid-parentheses.js) - Stack + HashMap for closing/opening parentheses
- [155. Min Stack](/2025.02/2025.02.06/155-min-stack.js) - Stack with values + Stack with pairs (min value and index)
- [150. Evaluate Reverse Polish Notation](/2025.02/2025.02.06/150-evaluate-reverse-polish-notation.js) - Stack
- [739. Daily Temperatures](/2023.11/2023.11.14/739-daily-temperatures.js) - Stack + Monotonic sequence, or Answer + Iteration from end + Jumping
- [853. Car Fleet](/2023.12/2023.12.10/853-car-fleet.js) - Sort + Iteration from end, or HashMap + iteration from end, or Sparse Array + Iteration from end
- [84. Largest Rectangle in Histogram](/2025.02/2025.02.06/84-largest-rectangle-in-histogram.js) - Brute Force, or Divide and Conquer by min height, or Stack + Monotonic Increasing sequence

## Binary Search

- [704. Binary Search](/2025.02/2025.02.06/704-binary-search.js) - Binary search, or Upper Bound search, or Lower Bound search
- [74. Search in a 2D Matrix](/2023.11/2023.11.15/74-search-a-2d-matrix.js) - Binary search + index parse into (i, j)
- [875. Koko Eating Bananas](/2023.11/2023.11.15/875-koko-eating-bananas.js) - Binary search
- [153. Find Minimum in Rotated Sorted Array](/2023.11/2023.11.15/153-find-minimum-in-rotated-sorted-array.js) - Binary Search

## DFS

- [785. Is Graph Bipartite?](/2025.01/2025.01.30/785-is-graph-bipartite.js) - DFS + colour
- [827. Making A Large Island](/2023.12/2023.12.24/827-making-a-large-island.js) - HashMap + DFS

## BFS

- [102. Binary Tree Level Order Traversal](/2023.11/2023.11.12/102-binary-tree-level-order-traversal.js) - Queue
- [2493. Divide Nodes Into the Maximum Number of Groups](/2025.01/2025.01.30/2493-divide-nodes-into-the-maximum-number-of-groups.js) - UnionFind + BFS + levels

## Backtracking

- [22. Generate Parentheses](/2023.11/2023.11.14/22-generate-parentheses.js) - Backtracking + opening/closing balance

## Priority Queue

- [295. Find Median from Data Stream](/2025.02/2025.02.05/295-find-median-from-data-stream.js) - MinQueue + MaxQueue
- [23. Merge k Sorted Lists](/2023.11/2023.11.11/23-merge-k-sorted-lists.js) - MinQueue + first element

## Topological sort

Kahn's algorithm

- [Course Schedule 2](/2023.11/2023.11.13/210-course-schedule-ii.js)
- [Course Schedule 4](/2025.01/2025.01.29/1462-course-schedule-iv.js)
