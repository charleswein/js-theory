export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }


  insert(value: number): BST {
    // Write your code here.
    let currentNode: BST = this

    while (currentNode) {
      if(currentNode.value > value){
        if(currentNode.left) {
          currentNode = currentNode.left
        } else {
          currentNode.left = new BST(value)
          break
        }
      } else {
        if(currentNode.right) {
          currentNode = currentNode.right
        } else {
          currentNode.right = new BST(value)
          break
        }
      }
    }
    // Do not edit the return statement of this method.
    return this;
  }

  findNode = (value: number): BST => {
    let currentNode: BST = this

    while (currentNode.value !== value) {
      if(currentNode.left && currentNode.value > value){
        currentNode = currentNode.left
      }
      if(currentNode.right && currentNode.value < value){
        currentNode = currentNode.right
      }
    }

    return currentNode
  }

  findParentNode = (value: number): BST | null => {
    let currentNode: BST = this
    let parentNode: BST | null = null

    while (currentNode.value !== value) {
      if(currentNode.value > value && currentNode.left){
        parentNode = currentNode
        currentNode = currentNode.left
      }

      if(currentNode.value < value && currentNode.right){
        parentNode = currentNode
        currentNode = currentNode.right
      }
    }

    return parentNode
  }

  getMinValue = (): number  => {
    let minNode: BST = this

    while (minNode.left) {
      minNode = minNode.left
    }

    return minNode.value
  }

  getMaxValue = (): number  => {
    let maxNode: BST = this

    while (maxNode.right) {
      maxNode = maxNode.right
    }

    return maxNode.value
  }

  remove (value: number, parentNode: BST | null = null): BST {

    if(!this.right && !this.left){

      if(parentNode && this.value === value){

        if (parentNode.left &&
         parentNode.left.value === this.value){
          parentNode.left = null
        } else {
            parentNode!.right = null
        }
      }
    } else if (this.left || this.right) {
      if(this.value > value) this.left?.remove(value, this)

      else if(this.value < value) this.right?.remove(value, this)

      else {
        if (this.right) {
          this.value = this.right.getMinValue()
          this.right.remove(this.value, this)
        } else if (this.left) {
          this.value = this.left?.getMaxValue()
          this.left?.remove(this.value, this)
        }
      }
    }

    return this
  }

  contains(value: number) {

  let currentNode: BST = this

  while (currentNode) {
    if(currentNode.value === value) { return true }

    else if(currentNode.left && currentNode.value > value){
      currentNode = currentNode.left
    }
    else if(currentNode.right && currentNode.value < value) {
      currentNode = currentNode.right
    } else {
      break
    }
  }

  return false;
  }
}

const bst = new BST(50)

bst.
insert(30).
insert(20).
insert(40).
insert(70).
insert(60).
insert(80)

bst.remove(20)
