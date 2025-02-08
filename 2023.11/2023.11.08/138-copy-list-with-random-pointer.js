/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

// 17m
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  // Solution 1. Create next and then copy random
  // Time: O(N)
  // Space: O(N)
  // if (head === null) {
  //   return null;
  // }
  // const visited = new Map();
  // let dummy = new _Node(-1);
  // let parent = dummy;
  // let node = head;
  // while (node !== null) {
  //   const nodeCopy = new _Node(node.val);
  //   visited.set(node, nodeCopy);
  //   parent.next = nodeCopy;
  //   node = node.next;
  //   parent = parent.next;
  // }
  // let copiedNode = dummy.next;
  // node = head;
  // while (node !== null) {
  //   const copiedRandomNode = visited.get(node.random);
  //   copiedNode.random = copiedRandomNode;
  //   copiedNode = copiedNode.next;
  //   node = node.next;
  // }
  // return dummy.next;

  // Solution 2. Create next and random in one go
  // Time: O(N)
  // Space: O(N)

  // const visited = new Map();

  // const maybeSaveAndGet = (node) => {
  //   let nodeCopy;
  //   if (!visited.has(node)) {
  //     nodeCopy = new _Node(node.val);
  //     visited.set(node, nodeCopy);
  //   } else {
  //     nodeCopy = visited.get(node);
  //   }
  //   return nodeCopy;
  // };

  // let dummy = new _Node();
  // let parent = dummy;
  // let curr = head;
  // while (curr !== null) {
  //   const currCopy = maybeSaveAndGet(curr);
  //   parent.next = currCopy;
  //   parent = parent.next;

  //   if (curr.random !== null) {
  //     const randomCopy = maybeSaveAndGet(curr.random);
  //     currCopy.random = randomCopy;
  //   }

  //   curr = curr.next;
  // }

  // return dummy.next;

  // Solution 3: Add copies after the original nodes and then untie them
  // Time: O(N)
  // Space: O(1)
  if (head === null) {
    return null;
  }

  // 1. Add copies next to the original
  // A => A' => B => B' => ...
  let curr = head;
  while (curr !== null) {
    const currCopy = new _Node(curr.val);
    currCopy.next = curr.next;
    curr.next = currCopy;
    curr = currCopy.next;
  }

  curr = head;
  while (curr != null) {
    let currCopy = curr.next;
    if (curr.random !== null) {
      let randomCopy = curr.random.next;
      currCopy.random = randomCopy;
    }
    curr = currCopy.next;
  }

  // 2. Separate originals from copies
  let oldNode = head;
  let newNode = head.next;
  let newHead = head.next;
  while (oldNode !== null) {
    oldNode.next = oldNode.next.next;
    newNode.next = newNode.next !== null ? newNode.next.next : null;
    oldNode = oldNode.next;
    newNode = newNode.next;
  }

  return newHead;
};

// node:   Node(1) => Node(2) => Node(3)
// next:   Node(2) => Node(3) => null
// random: Node(3) => null => Node(2)

// map = {null: null, Node(1): CopiedNode(1), Node(2): CopiedNode(2), Node(3): CopiedNode(3)}
// dummy = Node(-1) => CopiedNode(1) => CopiedNode(2) => CopiedNode(3) => null
//                     => CopiedNode(3) => null          => CopiedNode(2)
// copiedParent = CopiedNode(3) => null
// copiedNode = null
// node = null
// copiedRandomNode = CopiedNode(2)
//  CopiedNode(1) => CopiedNode(2) => CopiedNode(3) => null
//  => CopiedNode(3) => null          => CopiedNode(2)
