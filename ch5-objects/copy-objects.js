const initial = {
    firstname: "Alice",
    age: 30,
    address: {street: "Patission", streetNum: 80}
}

const copyInitial = { ...initial }        //SHALLOW COPY
console.log(copyInitial)

const copyInitial2 = JSON.parse(JSON.stringify(initial)) //deep copy
console.log(copyInitial2)

const copyInitial3 = structuredClone(initial)

console.log(copyInitial3)