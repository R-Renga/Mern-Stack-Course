//inorder order

//left - root - right


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



//DFS (Depth-First Search)

const Inorder = (root) =>{
    let ans = [];

    function traversal(curr){
        if(!curr) return
        traversal(curr.left)
        ans.push(curr.value)
        traversal(curr.right)
    }
    traversal(root)
}

Inorder(root)