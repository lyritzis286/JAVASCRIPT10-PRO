const user = {
    id: 1,
    fistname: "Bob",
    lastname: "D.",
}

let id = user.id; //getter
user.id = 2 //setter

console.log(id)

let userId = user['id']
let firstname = user['firstname']

let last = 'lastname'
let userLastname = user[last]