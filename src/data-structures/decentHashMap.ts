import assert from "assert";

// class NaiveHashMap {
//   buckets: any[]
//   constructor(public initialCapacity = 2) {
//     this.buckets = new Array(initialCapacity)
//   }
//
//   setItem(key: any, value: any) {
//     const index = this.getIndex(key)
//
//     this.buckets[index] = value
//   }
//
//   getItem(key: any) {
//     const index = this.getIndex(key)
//
//     return this.buckets[index]
//   }
//
//   hash(key: any) {
//     let hashValue = 0
//     const stringTypeKey = `${key}${typeof key}`;
//
//     for(let i = 0; i < stringTypeKey.length - 1; i++) {
//       const charCode = stringTypeKey.charCodeAt(i)
//       hashValue += charCode << (i * 8)
//     }
//
//     return hashValue
//   }
//
//   getIndex(key: any) {
//     const indexHash = this.hash(key)
//     const index = indexHash % this.buckets.length
//
//     return index
//   }
// }
//
// // buckets = array
//
// const hashMap = new NaiveHashMap();
//
// hashMap.setItem('cat', 2);
// hashMap.setItem('rat', 7);
// hashMap.setItem('dog', 1);
// hashMap.setItem('art', 8);
//
// assert.equal(hashMap.getItem('art'), 8); // this one is ok
// assert.equal(hashMap.getItem('cat'), 8); // got overwritten by art 😱
// assert.equal(hashMap.getItem('rat'), 8); // got overwritten by art 😱
// assert.equal(hashMap.getItem('dog'), 8);
//
// console.log(hashMap.buckets)


class DecentHashMap {
  buckets: any[]
  collisions: number

  constructor(public initialCapacity = 2) {
    this.buckets = new Array(initialCapacity)
    this.collisions = 0
  }

  setItem(key: any, value: any) {
    const bucketIndex = this.getIndex(key)

    if(this.buckets[bucketIndex]) {

      this.buckets[bucketIndex].push({key, value})

      if(this.buckets[bucketIndex].length > 1) {
        this.collisions++
      }

    } else {
      this.buckets[bucketIndex] = [{key, value}]
    }

    return this
  }

  getItem(key: any) {
    const bucketsIndex = this.getIndex(key)

    for(let arrayIndex = 0;
        arrayIndex < this.buckets[bucketsIndex].length;
        arrayIndex++) {
      const entry = this.buckets[bucketsIndex][arrayIndex]

      if(entry.key === key) {
        return entry.value
      }
    }
  }

  hash(key: any) {
    let hashValue = 0
    const stringTypeKey = `${key}${typeof key}`;

    for(let i = 0; i < stringTypeKey.length; i++) {
      const charCode = stringTypeKey.charCodeAt(i)
      hashValue += charCode << (i * 8)
    }

    return hashValue
  }

  getIndex(key: any) {
    const indexHash = this.hash(key)
    const index = indexHash % this.buckets.length

    return index
  }
}

// Usage:
const decentHashMap = new DecentHashMap();

decentHashMap.setItem('cat', 2);
decentHashMap.setItem('rat', 7);
decentHashMap.setItem('dog', 1);
decentHashMap.setItem('art', 8);

console.log('collisions: ', decentHashMap.collisions); // 2
console.log(decentHashMap.buckets);
/*
  bucket #0: [ { key: 'cat', value: 2 }, { key: 'art', value: 8 } ]
  bucket #1: [ { key: 'rat', value: 7 }, { key: 'dog', value: 1 } ]
*/
assert.equal(decentHashMap.getItem('art'), 8); // this one is ok
assert.equal(decentHashMap.getItem('cat'), 2); // Good. Didn't get overwritten by art
assert.equal(decentHashMap.getItem('rat'), 7); // Good. Didn't get overwritten by art
assert.equal(decentHashMap.getItem('dog'), 1); // Good. Didn't get overwritten by art




// 1) naive
// 2) let’s sum each character ascii code.
// 3) Howeeeeeeeeever, there’s still an issue! Because rat and art are both 327, collision!
// 4) Houston, we still have a problem!! Different value types shouldn’t return the same hash code!
// 5) Yay!!! 🎉 We have a much better hash function! Hash is unique! However, we are still having problem with length.
// 6) Let's add collision counter
// 7) no collisions in hash table, but it's allocated a lot of space

