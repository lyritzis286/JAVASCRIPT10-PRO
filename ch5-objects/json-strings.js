const jsObj = {
    id: 1,
    hobbies: [{id: 1, title: "gym"}, {id: 2, title: "music"}, ]
}

//Serialization
const jsonString = JSON.stringify(jsObj)

console.log(jsonString)


//Deserialize
const jsObj2 = JSON.parse(jsonString)
console.log(jsObj2)

const jsonStr = `[
{"id": "pro1"}, {"id": "pro2"}]`

console.log(JSON.parse(jsonStr))