//Q6. Find the nth largest element in a sorted array
function kLargest(arr, n, k)
{   
    arr.sort((a, b) => b - a);
 
    for (let i = 0; i < k; i++){
        kth=arr[i];
        console.log(kth);
    }
}

    let arr = [ 1, 23, 12, 9, 30, 2, 50 ];
    let n = arr.length;
    let k = 1;
    kLargest(arr, n, k);