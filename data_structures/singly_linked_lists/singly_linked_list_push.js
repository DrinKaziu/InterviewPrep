class Node {
  constructor(val) {
    this.val = val; // piece of data
    this.next = null; // reference to next node
  }
}

// let first = new Node('Hi');
// first.next = new Node('there.');
// first.next.next = new Node('How');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

// let list = new SinglyLinkedList();
// list.push('Hi');
// list.push('there');
