const ages = [20, 30, 50, 18, 34];

function getMin(arr) {
    if (!Array.isArray(arr) || arr.lenght === 0) return;

    let minVal = Math.min(...arr);
    let minPosition = arr.indexOf(minVal);
    return [minVal, minPosition +1]
}

console.log(getMin(ages))