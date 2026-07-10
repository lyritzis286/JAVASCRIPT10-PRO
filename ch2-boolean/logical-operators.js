// Scenario: booleans
const cartTotal = 50;
const isMember = true;

const hasFreeShipping = cartTotal > 40 && isMember;

console.log(hasFreeShipping)

const hasDiscount = cartTotal > 100 || isMember;

//Τα && και || δεν επιστεφουν παντα boolean 
//Μπορει να επιστρέφουν μια απο τις τιμες
const username = ''
const displayName = username || 'Guest'

console.log(displayName)

const user = { name: 'Alice' }
const helloName = user && user.name; //truthy