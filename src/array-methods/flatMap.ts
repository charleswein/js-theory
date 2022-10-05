const a = [5, 4, -3, 20, 17, -33, -4, 18]
// Let's say we want to remove all the negative numbers and remain even number
const removeNegativeNumbersAndRemainEven = (num: number) => {
  if(num < 0) {
    return []
  }

  return (num % 2 === 0 ? [num] : [])
}
const result = a.flatMap(removeNegativeNumbersAndRemainEven)
console.log(result)

// [4, 20, 18]
