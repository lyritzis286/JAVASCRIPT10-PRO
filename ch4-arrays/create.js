const arr = []; //Empty array
const arr1 = [1, 2, 3, 4, 5];       //populate με literal 
const arr2 = [1, 'Alice', 3.4, true];
const sparseArr = [1, , 3];         //sparse array κενη 2η θεση
const arr3 = [,,,];         //lenght 3 (number of commas)


//Array is Constructor function 
const arr4 = Array(3)           //length 3 me empty element
const  arr5 = Array(2, 3, 5, 8)    //length 4 στοιχεια 2 3 5 8
const grid = [[1, 2], [3, 4], [5, 6]]
const objArr = [{id: 1}, {id: 2}, {id: 3} ]

console.log(arr1[0]);  //1

for (let i  = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

for (const item of arr1) {
    console.log(item)
}

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j])
    }
}

for (const row of grid) {
        for (const item of row) {
            console.log(item)
        }
    }