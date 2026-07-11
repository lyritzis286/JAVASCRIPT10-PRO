const arr = [1, 2, 3, 4, 5, 6, 7, 8 ]

const removedSlice = arr.splice(0, 4)   //[1, 2, 3, 4]

console.log(arr)
console.log(removedSlice)

// Insert 
arr.splice(0, 0 ,10)
console.log(arr)

//update
arr.splice(0, 1, 11)
console.log(arr)