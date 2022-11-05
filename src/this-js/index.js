// 'use strict'

// function logThis (x, y) {
//     console.log(this)
//     console.log(x, y)
// }

// const logThis = () => {
//     console.log(this)
// }

// logThis()
//
// const obj = {
//     num: 10,
// }
//
// logThis.bind(obj, 10)(20)
//
// logThis.call(2, 10, 20)
// logThis.apply(2, [10, 20])


[1,2,3,4].forEach(function (num) {
    console.log(num)
    console.log(this)
}, {num: 10})

class Person {
    constructor(name) {
        this.name = name
        console.log(this)
    }

    speak() {
        console.log('Hello I am ' + this.name)
    }
}

const conner = new Person('Corner')

conner.speak()
