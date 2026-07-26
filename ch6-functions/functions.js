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

//Rest parameters
//let arr = [1, 2, 3, 4]
//max(...arr)
//max(1, 2, 3, 4, 6)
 function max(...numbers) {          //rest operator
    // for(const num of numbers) {
    //     // find max 
    // }
    return Math.max(...numbers)     //spread operator

} 

 console.log(max(1, 2, 8, 3, 23, 17))  //23


 function calculateTotalPrice(discount, ...prices) {
    const totalPrice = prices.reduce((sum, price) => sum + price, 0)

    return totalPrice - discount
 }

 console.log(calculateTotalPrice(5, 10, 8, 30, 7))

 //Sanity Checks στα Input params των συναρτησεων
//εχουν νοημα μονο αν  public APIs, external data
const user = {
    id: 1,
    fistname: 'Alice',
    lastname: 'W.',
    hobbies: ['reading']
}
// Legacy
function getFirstHobby(user) {
    if (!(user && user.hobbies &&Array.isArray(user.hobbies) 
        && user.hobbies.length > 0)) {
        return
    }

    return user.hobbies[0]
}

// Modern way -- Object Param

function getFirstHobby2(user) {
    return user?.hobbies?.[0] ?? 'No Hobbies'
}

// for arrays
function gradesSum(grades) {
    if(!Array.isArray(grades) || grades.length === 0) {
        return
    }
    // for ...
}

// Arrow Function -- Implicit & Explicit return

const square = (n) => n * n         //Υπονοουνται curly braces return Implicit


console.log(square(5))

const cube = (n) => {
    const result = n * n * n
    return result
}

//Implicit return of object

const createUser = (username, role) => ({username: username, role: role})