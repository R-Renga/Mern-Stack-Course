function factorail(n){
    if(n==1) return n
    return n* factorail(n-1)
} 

let result = factorail(5)
console.log(result);