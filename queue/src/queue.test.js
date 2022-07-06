const Queue = require("./queue");

describe("queue", () => {
  it("should create a queue", () => {
    const queue = new Queue();

    expect(typeof queue).toBe("object");
    expect(typeof queue.enqueue).toBe("function");
    expect(typeof queue.dequeue).toBe("function");
    expect(typeof queue.peek).toBe("function");
  });

  it("should add an item", () => {
    const queue = new Queue();

    queue.enqueue(1);

    expect(queue.peek()).toBe(1);
  });

  it("should add multiple items", () => {
    const queue = new Queue();

    queue.enqueue(100);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toBe(100);
  });

  it("should remove items from the beginning", () => {
    const queue = new Queue();

    queue.enqueue(100);
    queue.enqueue(200);
    queue.dequeue();

    expect(queue.peek()).toBe(200);

    queue.enqueue(300);
    queue.dequeue();

    expect(queue.peek()).toBe(300);
  });

  it("should not break if dequeue in an empty queue", () => {
    const queue = new Queue();

    expect(queue.dequeue()).toBe(undefined);
  });
});
