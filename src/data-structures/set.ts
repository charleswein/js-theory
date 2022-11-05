const set = new Set()

set.add(123)

set.has(34)

set.add({})

// set.delete()
// set.clear()
// entries and keys the same
console.log(set.has({}))

for(let value of set) {
  console.log(value)
}

const arr10 = [1,2,2,4,5]

console.log(Array.from(new Set(arr10)))

const weakSet = new WeakSet();

(function () {
  const obj = {}

  weakSet.add(obj)
})()

console.log(weakSet.has({}))

