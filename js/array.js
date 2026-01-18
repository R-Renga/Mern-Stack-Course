let arr = [2,3,98,34,2];

let arrstr = ["kurta","shoes","iphones"];

let arrof = [{
    name:"chennai",
    age : 45
},{
    name:"tirupur",
    age:"22"
}]


//push,pop,unshift,shift
//findindex , findlastindex,reverse,concat,join
//Array.from(),Array.isArray() ,flat()

//includes,indexof

console.log(arr.findIndex(data =>data%2 !== 0));
console.log(arrstr.includes("kurta")); // true
console.log(arrstr.indexOf("kurta")); // index number // false -1

//some //every

console.log(arr.some((data)=>data%2 === 0)); // true if any one matches
console.log(arr.every((data)=>data%2 === 0)); // true if all matches

//fill

console.log(Array(26).fill(0));


//slice - extract specific porition of array

arr.slice(1,4); // 4th index does not include

// splice() is used to add, remove, or replace elements in an array.

// array.splice(startIndex, deleteCount, item1, item2, ...)

// let arr = [1, 2, 5];

arr.splice(2, 0, 3, 4);
console.log(arr); // [1, 2, 3, 4, 5]











