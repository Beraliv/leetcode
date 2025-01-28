/**
 * // Definition for a Node.
 * function Node(val, next, random) {
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
  // Solution 1. Map<OldNode | null, NewNode | null>, O(N) space
  //   const map = new Map();
  //   map.set(null, null);
  //   let dummy = new Node(-1, null, null);
  //   let copiedParent = dummy;
  //   let node = head;
  //   while (node !== null) {
  //     const copiedNode = new Node(node.val, null, null);
  //     map.set(node, copiedNode);
  //     copiedParent.next = copiedNode;
  //     node = node.next;
  //     copiedParent = copiedParent.next;
  //   }
  //   let copiedNode = dummy.next;
  //   node = head;
  //   while (node !== null) {
  //     const copiedRandomNode = map.get(node.random);
  //     copiedNode.random = copiedRandomNode;
  //     copiedNode = copiedNode.next;
  //     node = node.next;
  //   }
  //   return dummy.next;
  //   Solution 2. O(1) space
  if (head === null) {
    return null;
  }

  let pointer = head;
  while (pointer !== null) {
    const newNode = new Node(pointer.val, null, null);
    newNode.next = pointer.next;
    pointer.next = newNode;
    pointer = newNode.next;
  }

  pointer = head;

  while (pointer !== null) {
    pointer.next.random = pointer.random !== null ? pointer.random.next : null;
    pointer = pointer.next.next;
  }

  let oldListPointer = head; // A->B->C
  let newListPointer = head.next; // A'->B'->C'
  let newHead = head.next;

  while (oldListPointer !== null) {
    oldListPointer.next = oldListPointer.next.next;
    newListPointer.next =
      newListPointer.next !== null ? newListPointer.next.next : null;
    oldListPointer = oldListPointer.next;
    newListPointer = newListPointer.next;
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
