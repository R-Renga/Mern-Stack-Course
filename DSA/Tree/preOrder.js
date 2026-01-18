//DFS (Depth-First Search)

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

//root - left - right

const preOrder = (root) =>{
   const arr = [];
   
   function traversal(curr){
    if(!curr) return;
    arr.push(curr.value);
    traversal(curr.left);
    traversal(curr.right)
   }

   traversal(root);
   return arr;
};


const result = preOrder(root);
console.log(result);