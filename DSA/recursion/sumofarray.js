let arr = [2,4,6,8]

function sumofArray(n){
    if(n==0) return arr[0];
    return arr[n]+sumofArray(n-1)
}

let result = sumofArray(arr.length-1);

console.log(result);







