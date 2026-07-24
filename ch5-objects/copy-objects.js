const initial = {
    firstname: "Alice",
    age: 30,
    address: {street: "Patission", streetNum: 80}
}

const copyObj = initial; 

copyObj.address= {street: "Vikela", streetNum: 90}
console.log(initial.address)

const copyInitial = { ...initial }        //SHALLOW COPY
copyInitial.firstname = 'Bob'
copyInitial.address.street = 'Aristotelous'
console.log(initial.address.street)

const copyInitial2 = JSON.parse(JSON.stringify(initial)) //deep copy
console.log(copyInitial2)

const copyInitial3 = structuredClone(initial) //deep copy

console.log(copyInitial3)