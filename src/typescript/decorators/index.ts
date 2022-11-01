function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

@Logger('Loggin - Person')
class Person {
  name = 'Max'

  constructor() {
    console.log("Creating person object...")
  }
}

const person = new Person()

console.log(person)
