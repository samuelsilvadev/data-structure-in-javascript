const SinglyLinkedList = require("./index");

function getNodeValue(node) {
  return node.value;
}

describe("SinglyLinkedList", () => {
  it("should create a head element on startup", () => {
    const sll = new SinglyLinkedList();

    expect(sll.head.value).toBe("HEAD");
  });

  it("should add element correctly", () => {
    const sll = new SinglyLinkedList();

    [1, 3, 5, 7].forEach((number) => {
      sll.add(number);

      expect(getNodeValue(sll.head.next)).toBe(number);
    });
  });
});
