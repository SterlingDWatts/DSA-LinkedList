class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  _previousNode(item) {
    if (!this.head) return null;

    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode !== null && currentNode.value !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      console.log("Item not found");
      return null;
    }

    return previousNode;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertBefore(item, ptr) {
    if (!this.head) return null;

    if (this.head.value === ptr) {
      this.insertFirst(item);
    } else {
      let previousNode = this._previousNode(ptr);

      if (!previousNode) {
        return;
      }

      previousNode.next = new _Node(item, previousNode.next);
    }
  }

  insertAfter(item, ptr) {
    if (!this.head) return null;

    let currentNode = this.find(ptr);

    if (!currentNode) {
      return null;
    }

    currentNode.next = new _Node(item, currentNode.next);
  }

  insertAt(item, index) {
    if (index === 0) {
      this.insertFirst(item);
    } else {
      let currentNode = this.head;
      let i = 0;
      while (currentNode !== null && i < index - 1) {
        currentNode = currentNode.next;
        i++;
      }
      currentNode.next = new _Node(item, currentNode.next);
    }
  }

  insertLast(item) {
    if (!this.head) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  remove(item) {
    if (!this.head) return null;

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let previousNode = this._previousNode(item);

    if (!previousNode) {
      return;
    }

    previousNode.next = previousNode.next.next;
  }

  find(item) {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode.value !== item) {
      if (currentNode.next === null) {
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
}

module.exports = LinkedList;
