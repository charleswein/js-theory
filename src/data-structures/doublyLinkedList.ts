import CustomNode from "./customNode";

class DoublyLinkedList {
  head:any
  tail:any
  length = 0

  constructor(value?: any) {
      if(value) {
        this.head = new CustomNode(value)
        this.tail = new CustomNode(value)
        this.length++
      }
  }

  push(val:any) {
      const newNode = new CustomNode(val)
      if(this.length === 0) {
        this.head = newNode
        this.tail = newNode
      } else {
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
      }
      this.length++
      return this.length
  }

  pop() {
    if(!this.head) return
    const currentTail = this.tail
    if (this.length === 1) {
      this.head = undefined
      this.tail = undefined
    } else {
      this.tail = currentTail.prev
      this.tail.next = undefined
    }
    this.length--
    return currentTail
  }

  shift() {
    if(this.length === 0) return undefined;
    const oldHead = this.head;
    if(this.length === 1){
      this.head = undefined;
      this.tail = undefined;
    }else{
      this.head = oldHead.next;
      oldHead.next = undefined;
      this.head.prev = undefined
    }
    this.length--;
    return oldHead;
  }

  unshift(val:any) {
    const newNode = new CustomNode(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      console.log(this.head)
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this.length
  }

  get(index: number) {
    if(index < 0 || index >= this.length) return
    let count, current;
    if(index <= this.length / 2){
      count = 0;
      current = this.head;
      while(count !== index){
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while(count !== index){
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index: number, val: any) {
    const node = this.get(index)
    if(node) {
      node.value = val
      return true
    }

    return false
  }

  insert(index: number, val: any) {
    if(index < 0 || index >= this.length) return false
    if(index === 0) return this.unshift(val)
    if(index === this.length) return this.push(val)

    const newNode = new CustomNode(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next

    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index: number) {
    if(index < 0 || index >= this.length) return false
    if(index === 0) return !!this.shift()
    if(index === this.length - 1) return !!this.pop()

    const removedNode = this.get(index)
    const beforeNode = removedNode.prev
    const afterNode = removedNode.next

    beforeNode.next = afterNode, afterNode.prev = beforeNode
    removedNode.next = undefined
    removedNode.prev = undefined
    this.length--
    return removedNode
  }
}

const list = new DoublyLinkedList()
console.log(list.insert(0, 1));

// It's working similar to History API in browser

// accessing O(n)
// setting O(n)
// inserting and removing O(1)
// searching for a value: O(n)


