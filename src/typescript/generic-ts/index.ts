const names: Array<string> = ['Max', 'Dmitro']

names[0].split(' ')

const promise : Promise<any> = new Promise((resolve) => {
  setTimeout(() => resolve('10'), 2000)
})

promise.then(data => {
  data.split(' ');
})


function merge<K extends object, U extends object>(objA: K, objB: U) {

  return Object.assign(objA, objB)
}

const mergeObj =
 merge<{name: string}, {age: number}>({name: 'Max'}, {age: 30})

interface Lengthy {
  length: number;
}


function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';

  if(element.length === 0) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1){
    descriptionText = "Got " + element.length + ' elements.';
  }
  return [element, descriptionText]
}

console.log(countAndDescribe('Hi there!'))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name: 'Max'}, 'name'))


class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    if(this.data.indexOf(item) !== -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1) // -1
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('Max')
textStorage.addItem('Menu')
textStorage.addItem('Denis')
textStorage.removeItem('Max')

console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();

const maxObj = {name: 'Max'};

objStorage.addItem({name: 'Max'})
objStorage.addItem({name: 'Menu'})
// ...
objStorage.removeItem(maxObj)
console.log(objStorage.getItems())

// type safety and flexibility

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

const createCourseGoal =
 (title: string, description: string, completeUntil: Date): CourseGoal => ({
 title, description, completeUntil
})

type CreateCourseGoalType = ReturnType<typeof createCourseGoal>
