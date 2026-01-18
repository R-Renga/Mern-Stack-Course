function fibonacci(n) {
    let fib = [0, 1]; 

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib.slice(0, n); 
}

const result = fibonacci(6);
console.log(result); 
// Output: [0, 1, 1, 2, 3, 5]
