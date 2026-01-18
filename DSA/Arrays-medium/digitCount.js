// function countDigit(a){
//     if(a === 0) return 1;
//     a = Math.abs(a)
//     let count = 0;
//     while(a>0){
//         a = Math.floor(a/10);
//         count++;
//     }
//     return count;
// }


// let a = 259;

// let value = countDigit(a);

// console.log(value)


// //shortcut

// let num = 359;
// let digits = num.toString().length;
// console.log(digits); 

// /**
//  * math.floor = > (n/10) - 10.9 => 10
//  * math.ceil  = > (n/10) - 10.2 => 11
//  * math.round = > (n/10) - 10.6 => 11, 10.2 => 10
//  * math.abs   = > (Math.abs(n)) - becomes negative to positive number
//  */


// /**
//  * a/10 => quotient
//  * a%10 => remainder
//  */


// function digitCount(num){
//     let count = 0;
//     num = Math.abs(num);
//     if(num === 0) return -1;
//     while(num > 0){
//         num = Math.floor(num/10);
//         count ++
//     }
//     return count;
// }

// let finalResult = digitCount(2345);

// console.log(finalResult);


//shortcut

let a = 2599;
let digits = a.toString().length
console.log(digits);


function countDigit(a){
if(a ===0 ) return 1;   
 a = Math.abs(a);
let count = 0;
 while(a>0){
    a = Math.floor(a/10);
    count++
 }
return count
}

let final = countDigit(123);
console.log(final);

let student = {
   name:"raja",
   printname :()=>{
    console.log(this);
    
   }
}

student.printname()

//nodejs = {} - js runs on module
this === module.exports  // true

//in browser - window object

{
   var ab = 100;
   let b = 20;
   const c = 30;
}


const c = 90;
let b = 86;
console.log(b,c)