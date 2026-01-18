let arr = [2,4,5,6,7,8]

function sumofN(arr,N){
    let sum = 0;
    for(let i=0;i<=N;i++){
        sum = sum + arr[i]
    }
    return sum;
}


let result = sumofN(arr,2);
console.log(result);


//sum of first natural numbers

function naturalnumbers(n){
  return (n*(n+1))/2
}

let final = naturalnumbers(5)
console.log(final);
