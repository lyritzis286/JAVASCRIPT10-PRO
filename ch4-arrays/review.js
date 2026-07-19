//Ασκηση 
//μια συναρτηση που να παιρνει ενα πινακα αριθμων 
//και να επιστρεφει το μεγαλυτερο 
//αριθμο, χωρις τη math.max

function findMax(arr){ 
    if (!Array.isArray(arr) || arr.lenght === 0) {
        return
    }
     let max = -Infinity;
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

//Ασκηση 5 
// Μια συναρτηση που βρισκει το 2ο μεγαλυτερο
// αριθμο ενος πινακα [7,7,4]

function secondBigger(arr) {
    
    if(!Array.isArray(arr) || arr.length < 2) {
        return
    }

    let firstMax = -Infinity;
    let secMx = -Infinity;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > firstMax) {
            secondMax = firstMax
            firstMax = arr[i]
        }else if(arr[i] > secondMax && arr[i] !== firstMax) {
            secondMax = arr[i]
        }
    }
    return secondMax;
}

function secondMax2(arr) {
    const uniqueNumbers = [...new Set(arr)]
    uniqueNumbers.sort((a, b) => b - a)
    return uniqueNumbers[1]
}

const arr1 = [12, 4, 7, 7, 9, 1];

console.log(secondMax2(arr1));

//Ασκηση 6 
// Μια συναρτηση που να παινρει ως εισοδο εναν πινακα 
// και ενα θετικο offset και να κανει αριστερο και κυκλικο 
// shift κατα offset θεσεις. [1, 2, 3] -> [2, 3, 1]

function shiftLeft(arr, offset) {
    let shiftedArray = []
    const normalizedOffset = offset % arr.length
    
    for(let i = 0; i < arr.length; i++) {
        shiftedArr[(i - normalizedOffset + arr.length) % arr.length] = arr[i] 
    }
}