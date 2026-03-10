function primeNumbers(n){
     if(n > 100) return ;

     if(isPrime(n,2)){
        console.log(n);
     }
     primeNumbers(n+1)
}


function isPrime(n,i){
    if(n <= 1) return false;
    if(i*i > n) return true;
    if(n%i === 0) return false;
    return isPrime(n,i+1) 
}

primeNumbers(1);