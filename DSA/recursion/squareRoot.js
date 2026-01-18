function sqrt(x){
    return Math.trunc(Math.pow(x,0.5))
}

const result = sqrt(5);
console.log(result);


//brute force

function abc(x){
    for(let i=0;i<x;i++){
        if(i*i > x){
            return i-1
        }
    }
}

const final = abc(20)
console.log(final);

//binary search

function xyz(n){
    if(n<2) return n;
    let l = 2;
    let r = Math.floor(n/2);
    while(l<=r){
        let middle = Math.floor((l+r)/2);
        if(n === middle**2){
            return middle;
        }else if(n < middle**2){
            r = middle - 1;
        }else{
            l = middle + 1;
        }
    }
    return [r,l];
}

let output = xyz(20);
console.log(output);

