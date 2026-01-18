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

const postOrder = (root) =>{
    let ans = [];

    function traversal(curr){
        if(!curr) return
        traversal(curr.left)
        traversal(curr.right)
        ans.push(curr.value)
    }
    traversal(root)
}

postOrder(root)




//postorder

// left - right - root


