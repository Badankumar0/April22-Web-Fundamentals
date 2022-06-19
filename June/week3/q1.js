//1.An array is given, return the sum of all the positives numbers.
// const input = [ 1, -5, 2, 10, -30, 29, 50];

const arr = [1, -5, 2, 10, -30, 29, 50];

function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0)
         sum += arr[i]
    }
    return sum
}

console.log(positiveSum(arr));