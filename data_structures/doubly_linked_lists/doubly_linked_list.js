class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if(!this.tail) return undefined;
    let poppedNode = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if(!this.head) return undefined;
    let removedNode = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev === null;
      removedNode.next === null;
    }
    this.length--;
    return removedNode
  }

  unshift(val) {
    let newNode = new Node(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(idx) {
    if(idx < 0 || idx >= this.length) return null;
    let current, counter;
    if(idx <= this.length / 2) {
      current = this.head;
      counter = 0;
      while(idx !== counter) {
        current = current.next;
        counter++;
      }

      return current;
    } else {
      current = this.tail;
      counter = this.length - 1;
      while(idx !== counter) {
        current = current.prev;
        counter--;
      }

      return current;
    }
  }

  set(idx, newVal) {
    let foundNode = this.get(idx);
    if(foundNode) {
      foundNode.val = newVal;
      return true;
    }

    return false;
  }

  insert(idx, val) {
    if(idx < 0 || idx > this.length) return false;
    if(idx === this.length) return !!this.push(val); //another way to return true;
    if(idx === 0) return !!this.unshift(val); //another way to return true;

    let newNode = new Node(val);
    let beforeNode = this.get(idx - 1);
    let afterNode = beforeNode.next;
    
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
}
