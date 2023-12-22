const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue extends ListNode {
  

  getUnderlyingList() {
    return this.next;
  }

  enqueue(value) {    
    let node = this;
    while (node.next) node = node.next;
    node.next = new ListNode(value);
  }

  dequeue() {
    let value = this.next.value,
        node = this;
        node.next = node.next.next;
    return value;
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue(), 5);
console.log(queue.dequeue(), 6);

module.exports = {
  Queue
};
