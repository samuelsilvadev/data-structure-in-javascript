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
});
