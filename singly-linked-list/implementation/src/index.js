const HEAD_DEFINITION = "HEAD";

class SinglyLinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = new SinglyLinkedListNode(HEAD_DEFINITION);
  }

  add(value) {
    const node = new SinglyLinkedListNode(value);

    if (this.head.next !== null) {
      const previousInHeadNext = this.head.next;

      node.next = previousInHeadNext;
    }

    this.head.next = node;
  }

  addAfter(node, value) {}
}

module.exports = SinglyLinkedList;

// queue = FIFO
// stack = LIFO
