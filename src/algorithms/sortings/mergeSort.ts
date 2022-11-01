export function mergeSort(array: number[]): number[] {

  // base recursive case
  if(array.length <= 1) return array;

  let middleIdx = Math.ceil(array.length / 2);
  let leftHalf = mergeSort(array.slice(0, middleIdx));
  let rightHalf = mergeSort(array.slice(middleIdx));

  // divide to array with one number
  let sortedArray = []

  let j = 0, i = 0;

  while(i < leftHalf.length && j < rightHalf.length){
    if(leftHalf[i] < rightHalf[j]) {
      sortedArray.push(leftHalf[i])
      i++
    } else {
      sortedArray.push(rightHalf[j])
      j++
    }
  }


  if(i === leftHalf.length){
    i = j
    leftHalf = rightHalf
  }

  while (i < leftHalf.length) {
    sortedArray.push(leftHalf[i])
    i++
  }

  return sortedArray;
}
