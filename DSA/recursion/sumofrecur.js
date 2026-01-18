function sum(n){
    if(n==0) return 0
    return 5+sum(n-1)
}

sum(5);

let arr = [1,2,3,45,65]
let n = arr.length-1
function sumofarr(n){
    if(n==0) return arr[0]
    return arr[n]+sum(n-1)
}

sumofarr(n);

function sumofodd(n){
    let isOdd = arr[n] % 2 != 0;
    if(n==0){
        return isOdd ? arr[n] : 0;
    }
    return isOdd ? arr[n] + sum(n-1) : 0 + sum(n-1)
}

