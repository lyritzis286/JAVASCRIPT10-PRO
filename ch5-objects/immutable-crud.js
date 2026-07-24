const user = {
    id: 1,
    firstname: "Alice"
}

//Mutable add
// user.lastname = "W."

//Immutable Add (creates new object)
const addToObj = (obj, field, value) => ({...obj, [field]: value})
const newObj = addToObj(user, "lastname", "W.")
console.log(user)
console.log(newObj)



//Mutable Update 
user.firstname = "BIBI"
console.log(user)

//Immutable Update
const updateObj = (obj, field, newVal) => ({...obj, [field]: newVal})

