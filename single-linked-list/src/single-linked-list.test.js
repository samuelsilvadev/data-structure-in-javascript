const SingleLinkedList = require("./single-linked-list");

describe("single linked list", () => {
  it("should create a single linked list", () => {
    const singleLinkedList = new SingleLinkedList();

    expect(typeof singleLinkedList).toBe("object");
    expect(typeof singleLinkedList.insert).toBe("function");
  });

  it("should add an item", () => {
    const singleLinkedList = new SingleLinkedList();

    singleLinkedList.insert(1000);

    expect(singleLinkedList.head.value).toBe(1000);
  });

  it("should add multiple items", () => {
    const singleLinkedList = new SingleLinkedList();
    const values = [1000, 2000, 3000];

    singleLinkedList.insert(values[0]);
    singleLinkedList.insert(values[1]);
    singleLinkedList.insert(values[2]);

    let node = singleLinkedList.head;

    for (const value of values) {
      expect(value).toBe(node.value);

      node = node.next;
    }

    expect(node).toBe(null);
  });

  it("should remove the tail", () => {
    const singleLinkedList = new SingleLinkedList();
    const values = [1000, 2000, 3000];

    singleLinkedList.insert(values[0]);
    singleLinkedList.insert(values[1]);
    singleLinkedList.insert(values[2]);

    singleLinkedList.removeTail();

    expect(singleLinkedList.head.value).toBe(1000);
    expect(singleLinkedList.tail.value).toBe(2000);
  });

  it("should check if a node is head and return true", () => {
    const singleLinkedList = new SingleLinkedList();

    singleLinkedList.insert(1000);
    singleLinkedList.insert(2000);
    singleLinkedList.insert(3000);

    const head = singleLinkedList.head;

    expect(singleLinkedList.isHead(head)).toBe(true);
  });

  it("should check if a node is head and return false", () => {
    const singleLinkedList = new SingleLinkedList();

    singleLinkedList.insert(1000);
    singleLinkedList.insert(2000);
    singleLinkedList.insert(3000);

    const secondElement = singleLinkedList.head.next;

    expect(singleLinkedList.isHead(secondElement)).toBe(false);
  });

  it("should check if a node is tail and return true", () => {
    const singleLinkedList = new SingleLinkedList();

    singleLinkedList.insert(1000);
    singleLinkedList.insert(2000);
    singleLinkedList.insert(3000);

    const tail = singleLinkedList.tail;

    expect(singleLinkedList.isTail(tail)).toBe(true);
  });

  it("should check if a node is tail and return false", () => {
    const singleLinkedList = new SingleLinkedList();

    singleLinkedList.insert(1000);
    singleLinkedList.insert(2000);
    singleLinkedList.insert(3000);

    const head = singleLinkedList.head;

    expect(singleLinkedList.isTail(head)).toBe(false);
  });

  it("should check if a value exists on the list and return true", () => {
    const singleLinkedList = new SingleLinkedList();

    singleLinkedList.insert(1000);
    singleLinkedList.insert(2000);
    singleLinkedList.insert(3000);

    expect(singleLinkedList.contains(3000)).toBe(true);
  });

  it("should check if a value exists on the list and return false", () => {
    const singleLinkedList = new SingleLinkedList();

    singleLinkedList.insert(1000);
    singleLinkedList.insert(2000);
    singleLinkedList.insert(3000);

    expect(singleLinkedList.contains(4000)).toBe(false);
  });
});
