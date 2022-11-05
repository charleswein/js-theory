function makeFunction() {
  let privateNum = 0;

  function privateIncrement() {
    privateNum++
  }

  return {
    logNum: () => console.log(privateNum),
    increment: () => {
      privateIncrement()
      console.log("Incremented!");
    }
  }
}

const { logNum, increment} = makeFunction()
const { logNum : logNum2, increment: increment2} = makeFunction()

logNum()
increment()
logNum()

logNum2()
increment()
logNum2()


// block scope
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 500)
}

// console.log(i) // Cannot find name 'i'.


// functional scope
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 500)
}

console.log(i)

