//Ασκηση 
//μια συναρτηση που να παιρνει ενα πινακα αριθμων 
//και να επιστρεφει το μεγαλυτερο 
//αριθμο, χωρις τη math.max

function findMax(arr){ 
    if (!Array.isArray(arr) || arr.lenght === 0) {
        return
    }
     let max = arr[0]
    for (let i = 0; i < arr.length; i++){ 
       
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax([13, 5, 78, 42]))

//Ασκηση 2
//μια συναρτηση που λαμβανει ως εισοδο
//ενα πινακα αριθμων και επιστρεφει τον
//μεσο ορο

function findAvg(arr) {
    if(!Array.isArray(arr) || arr.length === 0) {
        return;
    }

    let sum = 0;
    for (const num of arr) {
        sum += num 
    }
    return sum / arr.length 
}

function findAvg2(arr) {
    return arr.reduce((total, num) => total + num, 0) / arr.length
}

//Ασκηση 3
//μια συναρτηση που ελεγχει αν δυο πινακες ειναι ισοι 
// επιστρεφει true/false

function isEqual(arr1, arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return
    }

    if(arr1.length === 0 || arr2.length === 0) {
        return
    }

    if(arr1.length !== arr2.length) {
        return false;
    }

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(isEqual([1, 2, 3, 4], [1, 2, 3]));



//Ασκηση 4
//μια συναρτηση που λαμβανει ως εισοδο
//ενα πινακα και μια τιμη
//και επιστρεφει ενα νεο πινακα χωρις να εμφανιζει την τιμη αυτη 

function removeValue(arr, value) {
    return arr.filter(item => item !==value)
}