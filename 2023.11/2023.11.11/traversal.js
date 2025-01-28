// dfs

const inOrderTraversal = (node, visit) => {
  if (node !== null) {
    inOrderTraversal(node.left, visit);
    visit(node);
    inOrderTraversal(node.right, visit);
  }
};

const preOrderTraversal = (node, visit) => {
  if (node !== null) {
    visit(node);
    preOrderTraversal(node.left, visit);
    preOrderTraversal(node.right, visit);
  }
};

const postOrderTraversal = (node, visit) => {
  if (node !== null) {
    postOrderTraversal(node.left, visit);
    postOrderTraversal(node.right, visit);
    visit(node);
  }
};

function TreeNode(value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}

// LNR traversal
//      4
//   2     6
// 1   3 5   7
// -----------
// 1. Get sorted contents of a BST in ascending order (i.e. check BST for correctness)
const inOrder = [];
console.log("dfs in-order");
inOrderTraversal(
  new TreeNode(
    4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(6, new TreeNode(5), new TreeNode(7))
  ),
  (node) => {
    inOrder.push(node.value);
  }
);
console.log(inOrder);

// NLR traversal
//      1
//   2     6
// 3   4 5   7
// -----------
// 1. Search element in BST (i.e. decide where to go, to the left or to the right)
// 2. Topological sort (i.e. listing the dependency before the dependants)
const preOrder = [];
console.log("dfs pre-order");
preOrderTraversal(
  new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(5, new TreeNode(6), new TreeNode(7))
  ),
  (node) => {
    preOrder.push(node.value);
  }
);
console.log(preOrder);

const add = (a, b) => a + b;
const subt = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

//      7
//   3     6
// 1   2 4   5
// -----------
// 1. Any kind of removals (i.e. free memory from bottom to top)
// 2. Reverse Polish Notation (RPN)
const postOrder = [];
console.log("dfs post-order");
postOrderTraversal(
  new TreeNode(
    7,
    new TreeNode(3, new TreeNode(1), new TreeNode(2)),
    new TreeNode(6, new TreeNode(4), new TreeNode(5))
  ),
  (node) => {
    postOrder.push(node.value);
  }
);
console.log(postOrder);

//      *
//   -     /
// 5   3 8   2
// (5 - 3) * (8 / 2) = 8

const stack = [];
console.log("RPN with LRN traversal");
postOrderTraversal(
  new TreeNode(
    mult,
    new TreeNode(subt, new TreeNode(5), new TreeNode(3)),
    new TreeNode(div, new TreeNode(8), new TreeNode(2))
  ),
  (node) => {
    if (typeof node.value === "function") {
      const right = stack.pop();
      const left = stack.pop();
      const result = node.value(left, right);
      stack.push(result);
    } else {
      stack.push(node.value);
    }
  }
);
console.log(stack.pop());
