function sum (n){
    if(n==0) return 0;
    return n+sum(n-1)
}

let result = sum(5)

console.log(result);


// n*(n+1)/2 -> total sum - works only for first n natural numbers