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
- [3160. Find the Number of Distinct Colors Among the Balls](/2025.02/2025.02.07/3160-find-the-number-of-distinct-colors-among-the-balls.js) - 2 HashMaps (ball-color and color-ball pairs)
- [2845. Count of Interesting Subarrays](/2025.04/2025.04.25/2845-count-of-interesting-subarrays.js) - HashMap + Prefix Sum

**Arrays**

- [766. Toeplitz Matrix](/2023.11/2023.11.23/766-toeplitz-matrix.js) - Array + (i, j) vs (i - 1, j - 1)
- [271. Encode and Decode Strings](/2025.02/2025.02.03/271-encode-and-decode-strings.js) - Array + Escaping
- [238. Product of Array Except Self](/2025.02/2025.02.03/238-product-of-array-except-self.js) - Array + 2 accumulators
- [1570. Dot Product of Two Sparse Vectors](/2023.11/2023.11.19/1570-dot-product-of-two-sparse-vectors.js) - HashMap, or Array + 2 pointers
- [287. Find the Duplicate Number](/2025.02/2025.02.07/287-find-the-duplicate-number.js) - Array, or Negative Marking in place, or Floyd's Cycle Finding Algorithm (2 Slow + fast iterations, Second to find an entrance to the cycle)
- [346. Moving Average from Data Stream](/2023.11/2023.11.06/346-moving-average-from-data-stream.js) - Array + Circular Index
- [560. Subarray Sum Equals K](/2023.11/2023.11.16/560-subarray-sum-equals-k.js) - HashMap + 1 Iteration
- [1762. Buildings With an Ocean View](/2023.11/2023.11.19/1762-buildings-with-an-ocean-view.js) - Right to Left Iteration + Swap in place
- [56. Merge Intervals](/2023.11/2023.11.19/56-merge-intervals.js) - Sort + Merge in array
- [227. Basic Calculator II](/2023.11/2023.11.24/227-basic-calculator-ii.js) - No stack + 1 Iteration
- [121. Best Time to Buy and Sell Stock](/2025.02/2025.02.09/121-best-time-to-buy-and-sell-stock.js) - 1 Iteration + Maximum by gain (from minPrice)
- [2364. Count Number of Bad Pairs](/2025.02/2025.02.09/2364-count-number-of-bad-pairs.js) - HashMap + Iteration
- [53. Maximum Subarray](/2023.11/2023.11.22/53-maximum-subarray.js) - 1 Iteration + Global/Local Max
- [1524. Number of Sub-arrays With Odd Sum](/2025.02/2025.02.25/1524-number-of-sub-arrays-with-odd-sum.js) - Prefix Sum + Odd/Even Count
- [1749. Maximum Absolute Sum of Any Subarray](/2025.02/2025.02.26/1749-maximum-absolute-sum-of-any-subarray.js) - Prefix Sum + Min/Max

## String

- [1422. Maximum Score After Splitting a String](/2025.02/2025.02.08/1422-maximum-score-after-splitting-a-string.js) - 2 Iterations (pre-calculate ones + max on `zeros + ones`), or 1 Iteration (max on best, which is `zeros - ones`) + Calculate max (i.e. `best + ones`)

## 2 pointers

- [125. Valid Palindrome](/2025.02/2025.02.06/125-valid-palindrome.js) - 2 pointers
- [167. Two Sum II - Input Array Is Sorted](/2023.11/2023.11.14/167-two-sum-ii-input-array-is-sorted.js) - 2 pointers
- [15. 3Sum](/2025.02/2025.02.06/15-3sum.js) - Sort + Linear search + 2 pointers
- [11. Container With Most Water](/2025.02/2025.02.06/11-container-with-most-water.js) - 2 pointers + leftMax/rightMax
- [42. Trapping Rain Water](/2025.02/2025.02.06/42-trapping-rain-water.js) - Stack, or 2 pointers
- [680. Valid Palindrome II](/2023.11/2023.11.06/680-valid-palindrome-ii.js) - 2 pointers + 2 recursive calls when error happened
- [408. Valid Word Abbreviation](/2023.11/2023.11.23/408-valid-word-abbreviation.js) - 2 pointers
- [986. Interval List Intersections](/2023.12/2023.12.08/986-interval-list-intersections.js) - 2 pointers
- [88. Merge Sorted Array](/2025.02/2025.02.09/88-merge-sorted-array.js) - 2 Pointers
- [5. Longest Palindromic Substring](/2023.10/2023.10.25/5-longest-palindromic-substring.js) - 1 Iteration + 2 pointers (expand from all possible centres)
- [647. Palindromic Substrings](/2025.02/2025.02.27/647-palindromic-substrings.js) - 1 Iteration + 2 pointers (expand from all possible centres)
- [3356. Zero Array Transformation II](/2025.03/2025.03.13/3356-zero-array-transformation-ii.js) - Binary Search, or 2 Pointers + Linear Sweeping
- [763. Partition Labels](/2025.03/2025.03.30/763-partition-labels.js) - Last Character Index Array + 2 Pointers
- [2537. Count the Number of Good Subarrays](/2025.04/2025.04.16/2537-count-the-number-of-good-subarrays.js) - HashMap + 2 Pointers
- [2563. Count the Number of Fair Pairs](/2025.04/2025.04.19/2563-count-the-number-of-fair-pairs.js) - Sort + 2 Pointers (Lower + Upper bounds)
- [930. Binary Subarrays With Sum](/2025.04/2025.04.28/930-binary-subarrays-with-sum.js) - Leading Zeros Skipping + 2 Pointers + Counting
- [2302. Count Subarrays With Score Less Than K](/2025.04/2025.04.28/2302-count-subarrays-with-score-less-than-k.js) - 2 Pointers + Counting
- [3403. Find the Lexicographically Largest String From the Box I](/2025.06/2025.06.04/3403-find-the-lexicographically-largest-string-from-the-box-i.js) - 2 Pointers
- [1498. Number of Subsequences That Satisfy the Given Sum Condition](/2025.06/2025.06.29/1498-number-of-subsequences-that-satisfy-the-given-sum-condition.js) - Quick Power (cached) + Sort + 2 Pointers

## Sliding Window

- [1004. Max Consecutive Ones III](/2023.12/2023.12.04/1004-max-consecutive-ones-iii.js) - Sliding Window
- [2379. Minimum Recolors to Get K Consecutive Black Blocks](/2025.03/2025.03.08/2379-minimum-recolors-to-get-k-consecutive-black-blocks.js) - Sliding Window
- [3208. Alternating Groups II](/2025.03/2025.03.09/3208-alternating-groups-ii.js) - Sliding Window + 1 Pass
- [3306. Count of Substrings Containing Every Vowel and K Consonants II](/2025.03/2025.03.10/3306-count-of-substrings-containing-every-vowel-and-k-consonants-ii.js) - 2 Pass + Sliding Window + Looser Conditions
- [1358. Number of Substrings Containing All Three Characters](/2025.03/2025.03.11/1358-number-of-substrings-containing-all-three-characters.js) - Sliding Window
- [2401. Longest Nice Subarray](/2025.03/2025.03.17/2401-longest-nice-subarray.js) - Sliding Window + Bitwise Operations (|=, ^=)
- [1100. Find K-Length Substrings With No Repeated Characters](./2025.03/2025.03.26/1100-find-k-length-substrings-with-no-repeated-characters.js) - Sliding Window + Array, or Sliding Window + Bitwise Operations (|=, ^=)

## Greedy

- [1029. Two City Scheduling](/2025.03/2025.03.10/1029-two-city-scheduling.js) - Greedy + (A[0] - A[1] - (B[0] - B[1]))
- [2873. Maximum Value of an Ordered Triplet I](/2025.04/2025.04.02/2873-maximum-value-of-an-ordered-triplet-i.js) - Greedy + 3 Params
- [2434. Using a Robot to Print the Lexicographically Smallest String](/2025.06/2025.06.06/2434-using-a-robot-to-print-the-lexicographically-smallest-string.js) - Stack + Array + Greedy
- [2311. Longest Binary Subsequence Less Than or Equal to K](/2025.06/2025.06.26/2311-longest-binary-subsequence-less-than-or-equal-to-k.js) - RTL Iteration + Greedy

## Stack

- [20. Valid Parentheses](/2025.02/2025.02.06/20-valid-parentheses.js) - Stack + HashMap for closing/opening parentheses
- [155. Min Stack](/2025.02/2025.02.06/155-min-stack.js) - Stack with values + Stack with pairs (min value and index)
- [150. Evaluate Reverse Polish Notation](/2025.02/2025.02.06/150-evaluate-reverse-polish-notation.js) - Stack
- [739. Daily Temperatures](/2023.11/2023.11.14/739-daily-temperatures.js) - Stack + Monotonic sequence, or Answer + Iteration from end + Jumping
- [853. Car Fleet](/2023.12/2023.12.10/853-car-fleet.js) - Sort + Iteration from end, or HashMap + iteration from end, or Sparse Array + Iteration from end
- [84. Largest Rectangle in Histogram](/2025.02/2025.02.06/84-largest-rectangle-in-histogram.js) - Brute Force, or Divide and Conquer by min height, or Stack + Monotonic Increasing sequence
- [71. Simplify Path](/2023.11/2023.11.24/71-simplify-path.js) - Stack + 1 Iteration
- [2375. Construct Smallest Number From DI String](/2025.02/2025.02.18/2375-construct-smallest-number-from-di-string.js) - Backtrack + HashSet (visited), or Stack + Pop all digits when meeting I
- [1047. Remove All Adjacent Duplicates In String](/2025.02/2025.02.18/1047-remove-all-adjacent-duplicates-in-string.js) - Stack + Pop latest character when meeting duplicates
- [1028. Recover a Tree From Preorder Traversal](/2025.02/2025.02.22/1028-recover-a-tree-from-preorder-traversal.js) - Stack + 1 Iteration
- [224. Basic Calculator](2025.02/2025.02.25/224-basic-calculator.js) - Stack + 1 Iteration

## Binary Search

- [704. Binary Search](/2025.02/2025.02.06/704-binary-search.js) - Binary search (-1, <=, -1/+1, middle/-1), or Upper Bound (0, <, 0/+1, left-1/-1), or Lower Bound (0, <, 0/+1, left/-1)
- [74. Search in a 2D Matrix](/2023.11/2023.11.15/74-search-a-2d-matrix.js) - Binary search + index parse into (i, j) (-1, <=, -1/+1, middle/-1)
- [875. Koko Eating Bananas](/2023.11/2023.11.15/875-koko-eating-bananas.js) - Binary search (max, <, 0/+1, left)
- [153. Find Minimum in Rotated Sorted Array](/2023.11/2023.11.15/153-find-minimum-in-rotated-sorted-array.js) - Binary Search (-1, <=, 0/+1, left)
- [35. Search Insert Position](/2025.02/2025.02.07/35-search-insert-position.js) - Binary Search (-1, <=, -1/+1, middle/left)
- [33. Search in Rotated Sorted Array](/2023.11/2023.11.15/33-search-in-rotated-sorted-array.js) - 2 Binary searches - shift and value
- [34. Find First and Last Position of Element in Sorted Array](/2025.02/2025.02.06/34-find-first-and-last-position-of-element-in-sorted-array.js) - Lower Bound + Upper Bound
- [981. Time Based Key-Value Store](/2025.02/2025.02.07/981-time-based-key-value-store.js) - Map + Array + Upper bound
- [4. Median of Two Sorted Arrays](/2025.02/2025.02.07/4-median-of-two-sorted-arrays.js) - Binary search on smallest array + left/right for 2 array
- [235. Lowest Common Ancestor of a Binary Search Tree](/2023.12/2023.12.11/235-lowest-common-ancestor-of-a-binary-search-tree.js) - Binary search in BST tree
- [528. Random Pick with Weight](2023.11/2023.11.06/528-random-pick-with-weight.js) - Sorted Array + Binary Search (-1, <=, -1/+1, middle)
- [162. Find Peak Element](/2023.11/2023.11.19/162-find-peak-element.js) - Binary Search (-1, <, -1/+1, middle/start)
- [644. Maximum Average Subarray II](/2025.02/2025.02.18/644-maximum-average-subarray-ii.js) - Binary Search (Float, min/max, >= EPS, 0/0, (start+end)/2)
- [2529. Maximum Count of Positive Integer and Negative Integer](/2025.03/2025.03.12/2529-maximum-count-of-positive-integer-and-negative-integer.js) - Lower Bound + Upper Bound
- [2226. Maximum Candies Allocated to K Children](/2025.03/2025.03.14/2226-maximum-candies-allocated-to-k-children.js) - Binary Search + Counting
- [2560. House Robber IV](/2025.03/2025.03.15/2560-house-robber-iv.js) - Binary Search + Counting + Skipping
- [2594. Minimum Time to Repair Cars](/2025.03/2025.03.16/2594-minimum-time-to-repair-cars.js) - Binary Search + Non-overflow middle + Counting
- [2071. Maximum Number of Tasks You Can Assign](/2025.05/2025.05.01/2071-maximum-number-of-tasks-you-can-assign.js) - Binary Search + Deque
- [2040. Kth Smallest Product of Two Sorted Arrays](/2025.06/2025.06.25/2040-kth-smallest-product-of-two-sorted-arrays.js) - 2 Binary Searches (Range and 2nd Array)

## LinkedList

- [206. Reverse Linked List](/2025.02/2025.02.07/206-reverse-linked-list.js) - Prev, curr and next pointers
- [21. Merge Two Sorted Lists](/2023.11/2023.11.07/21-merge-two-sorted-lists.js) - Dummy + merged + point to list
- [141. Linked List Cycle](/2023.11/2023.11.16/141-linked-list-cycle.js) - HashSet + Iteration, or Floyd's Cycle Finding Algorithm (Slow + fast iteration)
- [143. Reorder List](/2023.11/2023.11.17/143-reorder-list.js) - Middle (Slow + fast iteration) + Reverse + Merge
- [19. Remove Nth Node From End of List](/2025.02/2025.02.07/19-remove-nth-node-from-end-of-list.js) - Stack + Iteration, or 2 iterations (length + removal), or 2 pointers for keeping gap of N
- [138. Copy List with Random Pointer](/2023.11/2023.11.08/138-copy-list-with-random-pointer.js) - HashMap for original/copy + 2 Iterations, or HashMap for original/copy + 1 Iteration, or 1 Iteration with copies next to original and 1 Iteration for separating originals and copies
- [2. Add Two Numbers](/2025.02/2025.02.07/2-add-two-numbers.js) - 1 Iteration + overflow
- [146. LRU Cache](/2023.11/2023.11.06/146-lru-cache.js) - Doubly Linked List + HashMap (key-node pairs) + addNode (tail) + remove (based on HashMap)
- [25. Reverse Nodes in k-Group](/2025.02/2025.02.08/25-reverse-nodes-in-k-group.js) - 2 pointers (to keep K-block) + revert

## DFS

- [785. Is Graph Bipartite?](/2025.01/2025.01.30/785-is-graph-bipartite.js) - DFS + colour
- [827. Making A Large Island](/2023.12/2023.12.24/827-making-a-large-island.js) - HashMap + DFS
- [226. Invert Binary Tree](/2023.12/2023.12.11/226-invert-binary-tree.js) - DFS, or Queue + BFS
- [104. Maximum Depth of Binary Tree](/2023.11/2023.11.16/104-maximum-depth-of-binary-tree.js) - DFS, or Iterative DFS + Stack
- [543. Diameter of Binary Tree](/2025.02/2025.02.08/543-diameter-of-binary-tree.js) - DFS + Intermediate calculation
- [110. Balanced Binary Tree](/2023.11/2023.11.12/110-balanced-binary-tree.js) - DFS + Collecting info (depth and balanced)
- [100. Same Tree](/2023.11/2023.11.16/100-same-tree.js) - DFS, or BFS + Queue + Early exit
- [1448. Count Good Nodes in Binary Tree](/2023.12/2023.12.11/1448-count-good-nodes-in-binary-tree.js) - DFS (node, maxValue) + Count, or BFS + Queue (node, maxValue) + Count
- [230. Kth Smallest Element in a BST](/2025.02/2025.02.08/230-kth-smallest-element-in-a-bst.js) - DFS + in-order traversal, or Iterative DFS + Stack
- [124. Binary Tree Maximum Path Sum](/2025.02/2025.02.08/124-binary-tree-maximum-path-sum.js) - DFS + post-order traversal + maximumPath calculation
- [536. Construct Binary Tree from String](/2025.02/2025.02.08/536-construct-binary-tree-from-string.js) - DFS + Number parsing + Index calculating
- [236. Lowest Common Ancestor of a Binary Tree](/2023.11/2023.11.13/236-lowest-common-ancestor-of-a-binary-tree.js) - DFS + Parent HashSet
- [938. Range Sum of BST](/2023.11/2023.11.23/938-range-sum-of-bst.js) - DFS + Optimisation for BST
- [339. Nested List Weight Sum](/2023.11/2023.11.25/339-nested-list-weight-sum.js) - DFS (list + depth)
- [129. Sum Root to Leaf Numbers](/2023.12/2023.12.28/129-sum-root-to-leaf-numbers.js) - DFS, or BFS, or Morris traversal (next node mutation)
- [889. Construct Binary Tree from Preorder and Postorder Traversal](/2025.02/2025.02.23/889-construct-binary-tree-from-preorder-and-postorder-traversal.js) - DFS
- [2467. Most Profitable Path in a Tree](/2025.02/2025.02.24/2467-most-profitable-path-in-a-tree.js) - 2 DFS (Bob path + Alice path), or 1 DFS (combined)
- [386. Lexicographical Numbers](/2025.03/2025.03.03/386-lexicographical-numbers.js) - Sort Array, or Array + DFS, or Array + Iterative DFS
- [1274. Number of Ships in a Rectangle](/2025.03/2025.03.06/1274-number-of-ships-in-a-rectangle.js) - Divide and Conquer
- [3341. Find Minimum Time to Reach Last Room I](/2025.05/2025.05.07/3341-find-minimum-time-to-reach-last-room-i.js) - 2D DP + DFS

## BFS

- [102. Binary Tree Level Order Traversal](/2023.11/2023.11.12/102-binary-tree-level-order-traversal.js) - Queue + BFS
- [2493. Divide Nodes Into the Maximum Number of Groups](/2025.01/2025.01.30/2493-divide-nodes-into-the-maximum-number-of-groups.js) - UnionFind + BFS + levels
- [102. Binary Tree Level Order Traversal](/2023.11/2023.11.12/102-binary-tree-level-order-traversal.js) - BFS + Queue + Level Iteration, or DFS
- [199. Binary Tree Right Side View](/2025.02/2025.02.08/199-binary-tree-right-side-view.js) - BFS + Queue + Level iteration, or DFS
- [98. Validate Binary Search Tree](/2025.02/2025.02.08/98-validate-binary-search-tree.js) - BFS + Queue (node, minValue/maxValue) + Early Exit
- [314. Binary Tree Vertical Order Traversal](/2023.11/2023.11.21/314-binary-tree-vertical-order-traversal.js) - BFS + Queue (left to right)
- [1091. Shortest Path in Binary Matrix](/2023.11/2023.11.20/1091-shortest-path-in-binary-matrix.js) - Queue + Visited 2D Array
- [987. Vertical Order Traversal of a Binary Tree](/2023.11/2023.11.26/987-vertical-order-traversal-of-a-binary-tree.js) - BFS + Local Sort
- [2014. Longest Subsequence Repeated k Times](/2025.06/2025.06.27/2014-longest-subsequence-repeated-k-times.js) - ZA Sort + BFS + Queue

## Tree (rest)

- [1650. Lowest Common Ancestor of a Binary Tree III](/2023.11/2023.11.21/1650-lowest-common-ancestor-of-a-binary-tree-iii.js) - Calculate 2 depths + Align to same depth

## Backtracking

- [22. Generate Parentheses](/2023.11/2023.11.14/22-generate-parentheses.js) - Backtracking + opening/closing balance
- [282. Expression Add Operators](/2025.02/2025.02.26/282-expression-add-operators.js) - Backtracking + Previous/Current + In-place calculation

## Heap / Priority Queue

- [295. Find Median from Data Stream](/2025.02/2025.02.05/295-find-median-from-data-stream.js) - MinHeap + MaxHeap
- [23. Merge k Sorted Lists](/2023.11/2023.11.11/23-merge-k-sorted-lists.js) - MinHeap + first element
- [373. Find K Pairs with Smallest Sums](/2025.02/2025.02.07/373-find-k-pairs-with-smallest-sums.js) - MinHeap + HashSet for visited + (i, j) => (i + 1, j), (i, j + 1) iteration
- [2349. Design a Number Container System](/2025.02/2025.02.08/2349-design-a-number-container-system.js) - 2 Maps + MinHeap + dequeue (when index doesn't match number)
- [215. Kth Largest Element in an Array](/2023.11/2023.11.11/215-kth-largest-element-in-an-array.js) - MinHeap + first element
- [973. K Closest Points to Origin](/2023.11/2023.11.19/973-k-closest-points-to-origin.js) - MaxHeap
- [1976. Number of Ways to Arrive at Destination](/2025.03/2025.03.23/1976-number-of-ways-to-arrive-at-destination.js) - Dijkstra (aka Adjacency List + MinHeap)
- [2503. Maximum Number of Points From Grid Queries](/2025.03/2025.03.28/2503-maximum-number-of-points-from-grid-queries.js) - Array Cache + MinHeap + BFS
- [3342. Find Minimum Time to Reach Last Room II](/2025.05/2025.05.08/3342-find-minimum-time-to-reach-last-room-ii.js) - BFS + Priority Queue + Dijkstra
- [2099. Find Subsequence of Length K With the Largest Sum](/2025.06/2025.06.28/2099-find-subsequence-of-length-k-with-the-largest-sum.js) - Min Heap + Sort
- [1353. Maximum Number of Events That Can Be Attended](/2025.07/2025.07.07/1353-maximum-number-of-events-that-can-be-attended.js) - Sort + Min Heap

## Topological sort

Kahn's algorithm

- [210. Course Schedule II](/2023.11/2023.11.13/210-course-schedule-ii.js) - Topological Sort
- [Course Schedule 4](/2025.01/2025.01.29/1462-course-schedule-iv.js)
- [2115. Find All Possible Recipes from Given Supplies](/2025.03/2025.03.22/2115-find-all-possible-recipes-from-given-supplies.js) - Hybrid Topological Sort (where verticals = recipes + supplies, and edges = all available ingredients across all recipes)
- [1857. Largest Color Value in a Directed Graph](/2025.05/2025.05.26/1857-largest-color-value-in-a-directed-graph.js) - Topological Sort + 2D DP + DFS

## Dynamic Programming

- [139. Word Break](/2025.02/2025.02.18/139-word-break.js) - Backtracking + HashSet, or BFS + Queue + 2 HashSets (Dictionary + Visited), or DP (TODO)
- [516. Longest Palindromic Subsequence](/2025.02/2025.02.28/516-longest-palindromic-subsequence.js) - Bottom-Up DP + 2D Memo (Memoisation)
- [1062. Longest Repeating Substring](/2025.02/2025.02.28/1062-longest-repeating-substring.js) - Bottom-Up DP + 2D Memo
- [1092. Shortest Common Supersequence](/2025.02/2025.02.28/1092-shortest-common-supersequence.js) - 2D DP + Backtracking (Restoring path) + 2 Pointers (Revert Array)
- [1143. Longest Common Subsequence](/2025.02/2025.02.28/1143-longest-common-subsequence.js) - Bottom-Up DP + 2D Memo
- [3469. Find Minimum Cost to Remove Array Elements](/2025.03/2025.03.02/3469-find-minimum-cost-to-remove-array-elements.js) - Top-Down DP + 2D Memo
- [2140. Solving Questions With Brainpower](/2025.04/2025.04.01/2140-solving-questions-with-brainpower.js) - 1D DP
- [416. Partition Equal Subset Sum](/2025.04/2025.04.07/416-partition-equal-subset-sum.js) - O/1 Knapsack + 2D DP, or O/1 Knapsack + Bitmask DP
- [3343. Count Number of Balanced Permutations](/2025.05/2025.05.09/3343-count-number-of-balanced-permutations.js) - Bottom-up 2D DP + Combinatorics, or Top-down 2D DP + DFS + Combinatorics
- [1931. Painting a Grid With Three Different Colors](/2025.05/2025.05.18/1931-painting-a-grid-with-three-different-colors.js) - 1D DP + Bitmask + Adjacency List

## Math

- [2579. Count Total Number of Colored Cells](/2025.03/2025.03.05/2579-count-total-number-of-colored-cells.js) - Geometrical formula
- [2965. Find Missing and Repeated Values](/2025.03/2025.03.06/2965-find-missing-and-repeated-values.js) - 2 formulae (Sum of numbers and sum of squares)
- [2523. Closest Prime Numbers in Range](/2025.03/2025.03.07/2523-closest-prime-numbers-in-range.js) - Iteration from 3 to Square Root + Check prev prime distance
- [2999. Count the Number of Powerful Integers](/2025.04/2025.04.10/2999-count-the-number-of-powerful-integers.js)
- [3272. Find the Count of Good Integers](/2025.04/2025.04.12/3272-find-the-count-of-good-integers.js) - Enumeration + Permutations + Combinatorics
- [790. Domino and Tromino Tiling](/2025.05/2025.05.05/790-domino-and-tromino-tiling.js) - Recurrent formula + 1D DP, or Recurrent formula + 3 values
- [3337. Total Characters in String After Transformations II](/2025.05/2025.05.14/3337-total-characters-in-string-after-transformations-ii.js) - Matrix Quick Multiplication
- [2894. Divisible and Non-divisible Sums Difference](/2025.05/2025.05.27/2894-divisible-and-non-divisible-sums-difference.js) - 2 Progressions

## Bits Manipulation

- [1863. Sum of All Subset XOR Totals](/2025.04/2025.04.05/1863-sum-of-all-subset-xor-totals.js) - Or Bitwise + Shift
- [3191. Minimum Operations to Make Binary Array Elements Equal to One I](/2025.03/2025.03.18/3191-minimum-operations-to-make-binary-array-elements-equal-to-one-i.js) - Greedy + Iteration + Xor Bitwise

## Binary Index Tree, or BIT

- [2179. Count Good Triplets in an Array](/2025.04/2025.04.15/2179-count-good-triplets-in-an-array.js) - Reversed Index Mapping + BIT
- [315. Count of Smaller Numbers After Self](/2025.04/2025.04.15/315-count-of-smaller-numbers-after-self.js) - Reversed Index Mapping + BIT
