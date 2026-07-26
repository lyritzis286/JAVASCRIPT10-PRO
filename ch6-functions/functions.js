//Basic function syntax
function sayHello(name) {
    return `Hello ${name}`
}

console.log(sayHello('Alice'))

//2 function expression 

const add = function(a, b) {
    return a + b
}

console.log(add(3, 8))

//Arrow functions 
const multiply = (a, b) => a * b;

console.log(multiply(3, 7))

//Optional Params
function createButton(text, color) {
    color = color || 'blue'
    console.log(text, color)
}

createButton('Hello', '') 

//Default Params
function createButton2(text, color = 'blue') {
    console.log(text, color)
}

createButton2('Hello')      //Hello blue
createButton2('Hello', 'red ')           //Hello red
createButton2('Hello', '')      //Hello