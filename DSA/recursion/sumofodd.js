let arr = [1,2,7,3,4,8,9]
function sumOfodd(n){
    let isOdd = arr[n]%2 != 0;
    if(n==0){
        return isOdd ? arr[n] : 0
    }
    return isOdd? arr[n] + sumOfodd(n-1) : 0 + sumOfodd(n-1)
}


let result = sumOfodd(arr.length-1);

console.log(result);