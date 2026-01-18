function rabbits(n){
    if(n==0) return 2;
    return 2 * rabbits(n-1)
}

let result = rabbits(5);
console.log(result);