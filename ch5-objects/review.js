//Askisi 1
//Μια συναρτηση getPropertyValue(obj, propertyName)
// που επιστρέφει την τιμή της ιδιότητας με αυτό 
// το όνομα 

function getPropertyValue(obj, propertyName) {
    return obj[propertyName]
}

const obj = {
    id: 1,
    firstname: "Alice"
}
console.log(getPropertyValue(obj, "id"))

//Ασκηση 1β
// Μια συναρτηση getPropertyVlue(obj, propertyName) 
// pπου επιστρεφει την τιμη της ιδιοτητας με αυτο
// το ονομα και λαμβανει υποψη την περιπτωση το Obj 
// να ειναι Null//undefined

function getPropertyValue2(obj, propertyName) {
    return obj?.[propertyName] //optional chaining
}

// Ασκηση 1γ
// Μια συναρτηση getPropertyVlue(obj, propertyName) 
// pπου επιστρεφει την τιμη της ιδιοτητας με αυτο
// το ονομα και λαμβανει υποψη την περιπτωση το Obj 
// να ειναι Null//undefined ή και το propertyName
// να μην υπαρχει

function getProperty(obj, propertyName) {
    if(obj == null || obj ==undefined) {
        return undefined
    }
    return Object.hasOwn(obj, propertyName)
        ? obj[propertyName]
        : undefined
}


//Ασκηση 2
// Μια συναρτηση που αθροιζει τις τιμες των 
// ιδιοτητων ενος object 
// {Jan: 100, feb: 300}

function sumValues(obj) {
    let sum = 0;
    for (const value of Object.values(obj)) {
        sum += value
    }
    return sum
}

function sumValues2 (obj){
    return Object.values(obj).reduce((sum, value) => sum + value, 0)
}
// Ασκηση 
// Μια συναρτηση που να εκτυπωνει τα Key, value
// ενος οbj

function printEntries(obj) {
    for(const [key, value] of Object.entries(obj)) {
        console.log(key +": " + value)
    }
}

Object.entries(obj).forEach(([key, value]) => console.log(key + ": " + value))

//Εστω το παρακατω bankAccount obj
// προσθεστε δυο μεθοδου: deposit withdraw
const bankAccount = {
    owner: "Alice",
    balance: 500,
    deposit(amount) {
        return this.balance += amount
    },
    withdraw(amount) {
        if(amount > this.balance) {
         console.log("Insufficient Balance")
         return this.balance
        }
        return this.balance -= amount
    }
}

//askisi 5

const products = [
    {name: 'mouse', price: 50},
    {name: 'keyboard', price: 80},
    {name: 'cpu', price: 100}
]

function findMostExpensice(products) {
    if(!Array.isArray(products)) return
    if(products.length === 0) return

    let mostExpensive = products[0]

    for(const product of products) {
        if(product.price > mostExpensive.price) {
            mostExpensive = product
        }
    }

    return mostExpensive    
}

// Έστω
// Μία συνάρτηση που να επιστρέφει object
// με γκρουπάρισμα ανά city των users
 const users = [
    { firstname: 'Alice', city: 'Athens'},
    { firstname: 'Bob', city: 'Patra'},
    { firstname: 'Costas', city: 'Athens'},
    { firstname: 'Dimitris', city: 'Patra'},
    { firstname: 'Elon', city: 'Athens'},
    { firstname: 'Frank', city: 'Patra'},
 ]

 // { Athens: ['Alice', 'Costas', 'Elon'], 
 // Patra: ['Bob', 'Dimitris', 'Frank']  }

 function groupByCity(users) {
    const groups = {}

    for (const user of users) {
        if (!(user.city in groups)) {
            groups[user.city] = []

        }
        groups[user.city].push(user.firstname)
    }

    return groups
    
 }