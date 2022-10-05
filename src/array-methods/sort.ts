let arr3 = ['Abl', '1', 'bla', '2', 'ab', '3', 'BLA', 'cbla', 'Cab']

const isNumeric = (value: string) => !isNaN(Number(value))
// order number => string, string sorting alphabetically and case-sensitive
let compareFunc = (a: string, b: string) => {
  if(!isNumeric(a) && isNumeric(b)) {
    return 1
  }

  if(isNumeric(a) && !isNumeric(b)) {
    return -1
  }

  if(isNumeric(a) && isNumeric(b)) {
    return 0
  }
  return a < b ? -1 : 1
}

let sortedArr = arr3.sort(compareFunc)

console.log(sortedArr);
