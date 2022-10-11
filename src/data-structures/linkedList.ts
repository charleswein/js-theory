import CustomNode from "./customNode";

class LinkedList {
  public head: any
  public length: number = 0
  public tail: any

  constructor(value?: any) {
    if(value) {
      const customNode = new CustomNode(value)
      this.head = customNode
      this.tail = customNode
    }
  }

  push(val: any) {
    const newNode = new CustomNode(val)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode

      return ++this.length
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++

    return this.length
  }

  traverse() {
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    return currentNode === this.tail
  }

  pop() {
    if (!this.head) return
    if (this.length === 1) {
      this.head = undefined
      this.tail = undefined
      this.length = 0

      return
    }
    let currentNode = this.head
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next
    }
    currentNode.next = undefined
    this.tail = currentNode
    this.length--

    return currentNode
  }

  shift() {
    if(!this.head) return
    if(this.length === 1) {
      this.head = undefined
      this.tail = undefined
      this.length = 0
      return this.length
    }
    const currentHead = this.head.next
    this.head = currentHead
    return --this.length
  }

  unshift(val: any) {
    const newNode = new CustomNode(val)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode

      return ++this.length
    }
    let prevHead = this.head
    this.head = newNode
    this.head.next = prevHead
    this.length++
    return this.head
  }

  find(val: any) {
    if(!this.head) return false
    let currentNode = this.head
    while (currentNode !== this.tail) {
      console.log(currentNode.value, val)
      if(currentNode.value === val) {
        return true
      }
      currentNode = currentNode.next
    }

    return val === this.tail.value
  }

  remove(val: any) {
    if(this.head.value === val) {
      return this.shift()
    }
    if(this.tail.value === val) {
      return this.pop()
    }
    let currentNode = this.head
    while (currentNode !== this.tail) {
      if(this.find(currentNode.next.value)) {
        currentNode.next = currentNode.next.next
        return --this.length
      }
      currentNode = currentNode.next
    }

    return
  }
}

const linkedList = new LinkedList()
linkedList.push(10)
linkedList.push(20)
linkedList.push(30)
linkedList.remove(10)
console.log(linkedList)

// Linked List

// accessing the head: O(1)
// accessing the tail: O(n)
// accessing the middle node: (n)
// inserting and removing the head = O(1)
// inserting O(1) removing O(n)
// inserting, removing in the middle: O(n) to access + O(1)
// searching for a value: O(n)
