const LinkedList = require("./linked-list");

const dsaLinkedList = {
  main() {
    const SLL = new LinkedList();

    const items = ["Apollo", "Boomer", "Helo", "Husker", "Starbuck"];
    for (const item of items.values()) {
      SLL.insertLast(item);
    }

    SLL.insertLast("Tauhida");

    SLL.remove("Husker");

    SLL.insertBefore("Athena", "Boomer");

    SLL.insertAfter("Hotdog", "Helo");

    SLL.insertAt("Kat", 2);

    SLL.remove("Tauhida");

    return SLL;
  },
  display(aLinkedList) {
    let currentNode = aLinkedList.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  },
  size(aLinkedList) {
    let size = 0;
    let currentNode = aLinkedList.head;
    while (currentNode !== null) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  },
  isEmpty(aLinkedList) {
    return this.size(aLinkedList) === 0;
  },
  findPrevious(aLinkedList, item) {
    let currentNode = aLinkedList.head;
    let previousNode = aLinkedList.head;
    while (currentNode !== null || currentNode.value !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      return null;
    }
    return previousNode;
  },
  findLast(aLinkedList) {
    let currentNode = aLinkedList.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  },
  WhatDoesThisProgramDo(lst) {
    // removes duplicates
    // O(n log n) 
    // As it goes through each item once in the array
    // It checks each remaining item against that
    // The second while loop continues to get smaller each time
    let current = lst.head;
    while (current !== null) {
      let newNode = current;
      while (newNode.next !== null) {
        if (newNode.next.value === current.value) {
          newNode.next = newNode.next.next;
        } else {
          newNode = newNode.next;
        }
      }
      current = current.next;
    }
  },
  reverseLinkedListRecursive(lst, currentNode = lst.head, reversedList = new LinkedList()) {
    if (currentNode.next === null) {
      return reversedList.insertLast(currentNode.value)
    }
    return currentNode.insertLast(currentNode.value), this.reverseLinkedListRecursive(lst, currentNode.next, reversedList)
  },
  reverseLinkedListIterative(lst) {
    let currentNode = lst.head
    const reversedList = new LinkedList()
    while (currentNode !== null) {
      reversedList.insertFirst(currentNode.value);
      currentNode = currentNode.next;
    }
    return reversedList
  },
  thirdFromEnd(lst) {
    let currentNode = lst.head
    let previousNode = lst.head
    let prevprevNode = lst.head
    while (currentNode.value !== null) {
      prevprevNode = previousNode
      previousNode = currentNode
      currentNode = currentNode.next
    }
    return prevprevNode
  },
  middleOfList(lst) {
    let currentNode = lst.head
    const lstArray = []
    while (currentNode !== null) {
      lstArray.push(currentNode.value)
      currentNode = currentNode.next
    }
    arrLen = lstArray.length
    midPoint = Math.floor(arrLen / 2)
    return lstArray[midPoint]
  },
  cycleInList(lst) {
    let currentNode = lst.head
    const llDictionary = {}
    while (currentNode.next !== null) {
      if (!llDictionary[currentNode.value]) {
        llDictionary[currentNode.value] = currentNode.next.value
      } else if (currentNode.next.value !== llDictionary[currentNode.value]) {
        return false
      }
      currentNode = currentNode.next
    }
    return true
  }
};

module.exports = dsaLinkedList;
