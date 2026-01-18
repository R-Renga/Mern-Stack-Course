//Bfs - level order

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

function bst(root){
 if(!root) return [];
  let queue = [root];
  let ans = [];
  while(queue.length){
    let node =  queue.shift();
    ans.push(node);
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
  } 
return ans; 
}

bst(root)