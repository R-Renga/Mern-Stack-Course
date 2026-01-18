let a = 121;

let reverse = Number(a.toString().split("").reverse().join(""))

console.log(reverse);



//one more solution

let arr = a.toString().split("").map(Number); // loop and make the element as number

console.log(arr);


//program solution


function palindrome(n){
    let ncopy = n;
    let rev = 0;
    while(n>0){
        rem = n % 10;
        rev = (rev * 10) + rem
        n = Math.floor(n/10);
    }
    if(rev === ncopy){
        return true
    }else{
        return false
    }

}

let value = palindrome(121);

console.log(value);



 