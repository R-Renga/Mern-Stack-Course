let a = 121;

let reverses = Number(a.toString().split("").reverse().join(""));

console.log(reverses);



let n = 5;

function reverse(n){
     let ncopy = n;
     n = Math.abs(n);
     let rev = 0;
     while (n>0){
        rem = n % 10;
        rev = (rev*10) + rem
        n = Math.floor(n/10);
     }
     let limit = Math.pow(2,31)
     if(rev < -limit || rev > limit) return 0

     return (ncopy < 0) ? -rev : rev 
}

let result = reverse(246);

console.log(result)