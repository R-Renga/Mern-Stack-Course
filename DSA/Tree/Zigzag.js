class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node("A");
root.left = new Node("B");
root.right = new Node("C");
root.left.left = new Node("D");
root.left.right = new Node("E");

const zigzaglevel = (root) => {
  if (!root) return;
  let ans = [];
  let q = [root];
  let level = 0;
  while (q.length) {
    let levelArr = [];
    let levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();
      if (level % 2 === 0) {
        levelArr.push(curr);
      } else {
        levelArr.unshift(curr);
      }
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    ans.push(levelArr);
    level++;
  }
  return ans;
};

zigzaglevel(root);
