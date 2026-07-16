// Ασκηςη 1
// Μια συναρτηση που παινει ως παραμετρο ενα string
//Επιστρεφει ενα νεο string σε αντιστροφη σειρα



function reverse(str) {
    let returnedStr = ''
    for(let i = str.length -1; i >= 0; i--) {
        returnedStr += str[i];
    }

    return returnedStr;
}

function reverse2(str) {
    return str.trim().split('').reverse().join('');
}

let str = "Coding"

console.log(reverse2(str))

//Άσκηση 2 
//Μια συνάρτηση που να ελεγχει αν ενα string 
//ειναι παλινδρομικο  agnovntaw peza kefalaia kai kena 

function  isPalindrome(str) {
    const normal = str.trim().toUpperCase().split(/\s+/).join('')
    const reverseStr = reverse2(normal);
    return normal === reverseStr;
}

str1 = 'savvas savvas'

console.log(isPalindrome(str1))

//Μια συναρτηση που μετραει ποσα φωνηεντα 
//[a, e, i, o, u] περιεχει ένα string, ανεξαρτητως 
//κεφαλαιων/ πεζων

function countVowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'u', 'i', 'o']
    for (const item of  str.toLowerCase()) {
        if (vowels.includes(item)) {
            count++
        }
    }
    return count;
}

console.log(countVowels('javascript'));

//4
function capitalizer(str) {
    if (!str.trim()) return '' 

    let returnedSentence = ''
    const tokens = str.trim().split(/\s+/)

    for (const token of tokens) {
        const newToken1 = token[0].toUpperCase()
        const newToken2 = token.slice(1).toLowerCase()
        returnedSentence += newToken1 + newToken2 + ' '
    }
    return returnedSentence.trim()
}


//Ασκηση 5 
//Μια συναρτηση που παιρνει ενα κειμενο και
//μια λεξη και επιστρεφει ποσες φορες εμφανιζεται
//αυτη η λεξη μεσα στο κεμενο ανεξαρτητων πεζων κεφαλαιων

function wordCounter(text, word) {
    if(!text.trim() || !str.trim()) return 0;
    const newText = text.trim().toLowerCase().split(/\s+/);
    const newWord = word.trim().toLowerCase();
    let times = 0;
    for(let item of newText) {
        if (item === newWord) {
            times++
        }
    }
    return times;

}

