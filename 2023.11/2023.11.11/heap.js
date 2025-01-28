function TreeNode(value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}

// O(logN)
const insert = (root, value) => {
  // 1. Insert to bottom
  // 2. Swap it with parents until finding the appropriate spot for value
  return root;
};

// O(1)
const getMinimum = (root) => root.value;

// O(logN)
const extractMinimum = (root) => {
  // 1. Remove root
  // 2. Swap old root with bottommost rightmost element
  // 3. Replace it with smallest child until the heap order is correct

  return root;
};

let root = null;
insert(4);
console.log(getMinimum(root)); // 4
insert(90);
console.log(getMinimum(root)); // 4
insert(55);
console.log(getMinimum(root)); // 4
insert(50);
console.log(getMinimum(root)); // 4
insert(87);
console.log(getMinimum(root)); // 4
insert(7);
console.log(getMinimum(root)); // 4
insert(2);
console.log(getMinimum(root)); // 2
extractMinimum(root);
console.log(getMinimum(root)); // 4
extractMinimum(root);
console.log(getMinimum(root)); // 7
