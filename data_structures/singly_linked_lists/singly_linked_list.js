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

  pop() {
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while(current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) { //we do this because it doesn't work when there's one item left on the list
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if(!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0) this.tail = null;
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else { // you have to have else here
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++
    return this;
  }
}

// let list = new SinglyLinkedList();
// list.push('Hi');
// list.push('there');
