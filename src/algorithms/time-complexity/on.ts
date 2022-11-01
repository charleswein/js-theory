function getMin(arr: number[]) {
  let min = arr[0]

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i]
    }
  }

  return min
}

console.log(getMin([123, 23, 131, 111, 23123, 2, 13, 2, 3]));
