import assert from "assert";

class HashMap {
  buckets: any[]
  size: number = 0
  collisions: number = 0
  keys: any[] = []

  constructor(initialCapacity= 16, private loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
  }

  hash(key: any) {
    let hashValue = 0
    const stringTypeKey = `${key}${typeof key}`

    for(let index = 0; index < stringTypeKey.length; index++) {
      const charCode = stringTypeKey.charCodeAt(index)
      hashValue += charCode << (index * 8)
    }

    return hashValue
  }

  private getBucketIndex(key: any) {
    const hashValue = this.hash(key)
    const bucketIndex = hashValue % this.buckets.length
    return bucketIndex
  }

  private getIndexes(key: any) {
    const bucketIndex = this.getBucketIndex(key);
    const values = this.buckets[bucketIndex] || [];

    for (let entryIndex = 0; entryIndex < values.length; entryIndex++) {
      const entry = values[entryIndex];
      if(entry.key === key) {
        return {bucketIndex, entryIndex};
      }
    }

    return {bucketIndex};
  }

  get(key: any) {
    const {bucketIndex, entryIndex} = this.getIndexes(key)
    if(entryIndex) {
      return this.buckets[bucketIndex][entryIndex].value
    }

    return
  }

  has(key: any) {
    return !!this.get(key)
  }

  set(key: any, value: any) {
    const {bucketIndex, entryIndex} = this.getIndexes(key)

    if(entryIndex === undefined) {
      // initialize array and save key/value
      const keyByIndex = this.keys.push({content: key})

      this.buckets[bucketIndex] = this.buckets[bucketIndex] || []

      this.buckets[bucketIndex].push({key, value, keyByIndex})

      this.size++
      // Optional: keep count of collisions
      if(this.buckets[bucketIndex].length > 1) {
        this.collisions++
      }
    } else {
      // override existing value
      this.buckets[bucketIndex][entryIndex].value = value
    }


    if(this.loadFactor
     && this.loadFactor > 0
     && this.getLoadFactor() > this.loadFactor) {
      this.rehash(this.buckets.length * 2)
    }

    return this
  }

  getLoadFactor(){
    return this.size / this.buckets.length
  }

  rehash(newCapacity: number) {
    const newMap = new HashMap(newCapacity)

    this.keys.forEach(key => {
      if(key) {
        newMap.set(key.content, this.get(key.content))
      }
    })

    //update bucket
    this.buckets = newMap.buckets
    this.collisions = newMap.collisions
    this.keys = newMap.keys
  }
}

const hashMap = new HashMap();

assert.equal(hashMap.getLoadFactor(), 0)
hashMap.set('songs', 2);
hashMap.set('pets', 7);
hashMap.set('tests', 1);
hashMap.set('art', 8);
assert.equal(hashMap.getLoadFactor(), 4 / 16)

hashMap.set('Pineapple', 'Pen Pineapple Apple Pen');
hashMap.set('Despacito', 'Luis Fonsi');
hashMap.set('Bailando', 'Enrique Iglesias');
hashMap.set('Dura', 'Daddy Yankee');

hashMap.set('Lean On', 'Major Lazer');
hashMap.set('Hello', 'Adele');
hashMap.set('All About That Bass', 'Meghan Trainor');
hashMap.set('This Is What You Came For', 'Calvin Harris ');

assert.equal(hashMap.collisions, 2)
assert.equal(hashMap.getLoadFactor(), 0.75)
assert.equal(hashMap.buckets.length, 16)

hashMap.set('Wake Me Up', 'Avicii'); // <--- Trigger REHASH

assert.equal(hashMap.collisions, 0)
assert.equal(hashMap.getLoadFactor(), 0.40625)
assert.equal(hashMap.buckets.length, 32)


