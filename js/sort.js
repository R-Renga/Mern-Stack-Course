const arr = [1,2,9,4,5,6];

arr.sort()

console.log(arr);

arr.sort((a,b)=>b-a);

console.log(arr);

const str = ["def","ae"]

str.sort((a,b)=>a-b)
str.sort() // works

console.log(str);

const strr = ["b","a","r","e"]

strr.sort() // works

console.log(strr);

