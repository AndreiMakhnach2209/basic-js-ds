const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node{
  constructor (value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}
 
class BinarySearchTree {

  constructor () {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add (data) {
    let node = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = node;
    } else {
      this.insertNewNode (this.rootNode, node);
    }
  }

  //////////////////// helper method////////////////////////
  insertNewNode (parrentNode, newNode) {
    if (parrentNode.data > newNode.data) {
      if (parrentNode.left === null) {
        parrentNode.left = newNode;
      } else {
        this.insertNewNode (parrentNode.left, newNode)
      }
    } else {
      if (parrentNode.right === null) {
        parrentNode.right = newNode;
      } else {
        this.insertNewNode (parrentNode.right, newNode)
      }
    }
  }
  ////////////////////////////////////////////////////////

  has(data) {
    return this.find(data) != null;
  }

  find(data) {
    return this.searchNode(this.rootNode, data);
  }

  //////////////////// helper method////////////////////////
  searchNode (node, data) {
    if (node === null) {
      return null;
    } 
    if (data < node.data) {
      return this.searchNode(node.left, data);
    } 
    if (data > node.data) {
      return this.searchNode(node.right, data);
    }
    return node;
  }
  //////////////////////////////////////////////////////////

  remove(data) {
    this.rootNode = this.removeNode(data);
  }

  removeNode(data, node = this.rootNode) {                // значение функции = узел
    if (node === null) return null;                       // если удаляемый узел не существует 

    if (data < node.data) {                              // уходим влево
      node.left = this.removeNode(data, node.left);      // изменяем узел (будет изменен после выполнения removeNode), создаем новый вызов функции для левого child'a (рекурсия)
      return node;                                       // после возврата из рекурсии передаем функции измененный узел
    }
    if (data > node.data) {                        // 
      node.right = this.removeNode(data,node.right);          // тоже самое для правой ветки
      return node;                                        //
    } 
                            //////////////  находим удаляемый узел ///////////////////////////
    if (node.left === null && node.right === null) return null;   // если нет чилдов, удаляем узел

    if (node.left === null) return node.right;                    // один потомок
    if (node.right === null) return node.left;                    //

                            ////////////////////////////////////// два потомка //////////////////////////////////////
    node.data = this.minNode(node.right).data;                                        /// изменяем значение узла на минимальное из правой ветки node
    node.right = this.removeNode(this.minNode(node.right).data, node.right);          // запускаем удаление узла с минимальным значением из правой ветки node
    return node;
  }

  min() {
    return this.minNode().data;
  }

  /////////////////////////////////////////
  minNode(node = this.rootNode) {
    while (node.left != null) node = node.left;
    return node;
  }
  ///////////////////////////////////////////

  max(node = this.rootNode) {
    while (node.right != null) node = node.right;
    return node.data;
  }
}



module.exports = {
  BinarySearchTree
};