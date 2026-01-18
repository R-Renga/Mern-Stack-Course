function print(n){
 if(n<1) return n;
 console.log(n);
 print(--n)
}

let a = 5;
print(a)