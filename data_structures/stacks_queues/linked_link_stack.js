class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //We use shift/unshift but call it push/pop since push/pop is
  //inefficient in sinly linked lists
  push(val) {
    let newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if(!this.first) return null; 
    let temp = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp;
  }
}
