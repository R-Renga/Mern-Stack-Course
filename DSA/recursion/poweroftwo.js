function powerOf(n){
    if(n==1) return true;
    if(n%2 !==0) return false;
    if(n<1) return false
    return powerOf(n/2);
}


let result = powerOf(5)
console.log(result);