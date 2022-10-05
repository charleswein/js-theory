export function binarySearch(array: Array<number>, target: number): number {
  // Write your code here.
  let left = 0
  let right = array.length - 1
  while(left <= right) {
    let mid = Math.floor((right + left) / 2)
    let potentialMatch = array[mid]

    if(target === potentialMatch) {
      return mid
    } else if (target < potentialMatch){
      right = mid - 1
    }
    else {
      left = mid + 1
    }
  }

  return -1
}
