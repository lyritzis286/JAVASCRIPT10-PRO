//Μετατροπή δευτερολέπτων σε λεπτά και δευτερόλεπτα
const  totalSeconds = 75;
const minutes =  Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60;

console.log(`Seconds ${totalSeconds} = ${minutes} minute and ${seconds} seconds`)
