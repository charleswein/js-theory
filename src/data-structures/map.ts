const map = new Map()

map.set('test', 123)

const obj = {}

// map.delete(10)
// map.clear()

console.log(map.get(10))
console.log(map.has(10))
console.log(map.size)
console.log(map.set(obj, 42))

for (let [key, value] of map) {
  console.log(key, value)
}

const iter = map.entries()

console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)
