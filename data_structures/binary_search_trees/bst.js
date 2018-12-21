class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if(this.root === null) {
      this.root = newNode;
      return this
    } else {
      let current = this.root;
      while(true) {
        if(val === current.value) return undefined;
        if(val < current.value) {
          if(current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if(val > current.value) {
            if(current.right === null) {
              current.right = newNode;
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
  }

  find(val) {
    if(!this.root) return false;
    let current = this.root;
    let found = false;

    while(current && !found) {
      if(val < current.value) {
        current = current.left;
      } else if(val > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if(!found) return undefined;
    return current;
  }

  BFS() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while(queue.length) { //we have to say .length because [] is truthy in JS
      node = queue.shift();
      data.push(node);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }

    return data;
  }
}
