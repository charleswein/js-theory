let arr1 = [1, 2, [1,2], 3, [1,2, [1,2,3]]]

console.log(arr1.flat(1));

// [1, 2, 1, 2, 3, 1, 2, Array(3)]

console.log(arr1.flat(2));

// [1, 2, 1, 2, 3, 1, 2, 1, 2, 3]
