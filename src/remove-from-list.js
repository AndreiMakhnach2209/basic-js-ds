const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  while (l.value === k) l = l.next;
  let node = l;               /// node -- это ссылка на элемент списка
  while (node.next) {
    if (node.next.value === k) node.next = node.next.next;
    else node = node.next;
  } 
  return l;

}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
const expected = convertArrayToList([1, 2, 4, 5]);
console.debug(initial, removeKFromList(initial, 3));



module.exports = {
  removeKFromList
};
