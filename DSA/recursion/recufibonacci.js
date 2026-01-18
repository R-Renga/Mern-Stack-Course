function fib(n){
    if(n<=1) return n;
    return fib(n-1) + fib(n-2)
}

const result = fib(8)
console.log(result);



function xyz(n){
    let sequence = [0,1];
    for(let i=2;i<=n;i++){
        sequence[i] = sequence[i-1] + sequence[i-2]
    }
    return sequence
}


const final = xyz(6)
console.log(final);


//dynamic approach

let store = {};

function fibo(n){
    if(n<=1) return n;
    if(!store[n]){
    store[n] =   fibo(n-1) + fibo(n-2)
    }
    return store[n];
};



const results = fibo(5)
console.log(results);




0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
